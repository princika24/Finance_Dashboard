import Modal from "../../../components/ui/Modal/Modal";
import TransactionForm from "./TransactionForm";

export default function TransactionModal({
    open,
    onClose,
    onSubmit,
    loading,
    transaction,

}) {

    return (

        <Modal
            isOpen={open}
            onClose={onClose}
            title={
                transaction
                    ? "Edit Transaction"
                    : "Add Transaction"
            }
        >

            <TransactionForm
                defaultValues={transaction}
                onSubmit={onSubmit}
                loading={loading}
            />

        </Modal>

    );

}