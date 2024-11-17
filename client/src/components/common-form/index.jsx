// src/components/common-form/index.jsx
import { Button } from "../ui/button";
import FormControls from "./form-controls";

function CommonForm({
    handleSubmit,
    buttonText,
    formControls = [],
    formData,
    setFormData,
    isButtonDisabled = false
}) {
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <FormControls 
                formControls={formControls} 
                formData={formData} 
                setFormData={setFormData} 
            />
            <Button 
                disabled={isButtonDisabled} 
                type="submit" 
                className="mt-4 w-full"
            >
                {buttonText || 'Submit'}
            </Button>
        </form>
    );
}

export default CommonForm;
