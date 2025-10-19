const config = require("config");
const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const nodemailer = require('nodemailer');
const User = require("../models/User");

const router = Router();

// /api/feedback/handlers
router.post(
    "/handlers", 
    [
        check("name", "Минимальная длина имени 2 символа.").isLength({ min: 2 }),
        check("telephone", "Минимальная длина номера 11 символов.").isLength({ min: 11 })
    ], 
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные."
                });
            }

            const {name, telephone} = req.body;
            const date = new Date();

            const user = new User({ name, telephone, date });

            await user.save();

            await sendMail(name, telephone, date);

            res.status(201).json({ message: "В ближайшее время с Вами свяжется менеджер." });
        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так, попробуйте снова." });
        }
    }
);

// /api/feedback/applications
router.get(
    "/applications", 
    async (req, res) => {
        try {
            if(req.query.password !== config.get("passwordAdmin")){
                return res.status(400).json({ message: "Что-то пошло не так, попробуйте снова." });
            }
            const users = await User.find({});
            res.json({ users:  users });
        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так, попробуйте снова." });
        }
    }
);

const sendMail = async (name, telephone, date) => {
    let htmlContent = `<p>${name}</p><p>${telephone}</p><p>${date}</p><br>`;

    const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true, 
        auth: {
            user: config.get("userMail"),
            pass: config.get("passwordMail")
        }
    });

    const mailOptions = {
        from: {
            name: 'Агенство Globeon',
            address: 'test-grchafv@yandex.ru'
        },
        to: 'grchafv@yandex.ru',
        subject: 'Новая заявка',
        html: htmlContent
    };

    await transporter.sendMail(mailOptions);
    
    transporter.close();
}

module.exports = router;