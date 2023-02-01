import PopupWithForm from './PopupWithForm';

export default function DeleteConfirmationPopup({ card, isOpen, onClose, onOutsideClickClose, onConfirmation }) {
    function handleSubmit(e) {
        e.preventDefault();
        onConfirmation({
            card,
        });
    }

    return (
        <PopupWithForm
            name={'delete-confirmation'}
            title={'Вы уверены?'}
            buttonName={'Подтвердить'}
            isOpen={isOpen}
            onClose={onClose}
            onOutsideClickClose={onOutsideClickClose}
            onSubmit={handleSubmit}
        ></PopupWithForm>
    );
}
