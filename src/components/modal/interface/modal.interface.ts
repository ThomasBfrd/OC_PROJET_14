export interface ModalProps {
    type: 'success' | 'error' | 'submit'
    title: string;
    body: string;
    cancelButton?: string;
    okButton: string;
    onCancel?: () => void;
    onOk?: () => void;
}