import { body } from "express-validator";

export const registerValidation = [
  body("email", "Неверный ормат nочты").isEmail(),
  body("password", "naроль должен быть минимум 5 сиMволов").isLength({
    min: 5,
  }),
  body("fullName", "укажите имя").isLength({ min: 3 }),
  body("avatarUrl", "Hеверная ссылка на аватаркy").optional().isURL(),
];
