export const FormConfig = {
    link: {
        required: 'Ссылка на картинку обязательна',
    },
    name: {
        required: 'Данное поле обязательно',
        minLength: {
            value: 3,
            message: 'Вы ввели слишком мало символов',
        },
        maxLength: {
            value: 20,
            message: 'Вы ввели слишком много символов',
        },
    },
};
