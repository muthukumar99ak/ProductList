import Select from 'react-select';
import { Modal } from 'react-bootstrap';

const ModalForm = (props) => {
    const selectCate = [
        { value: "fruits", label: "Fruits" },
        { value: "vegetables", label: "Vegetables" },
        { value: "dairy", label: "Dairy" }
    ];
    return (
        <Modal
            size="lg"
            show={props.modalShow}
            onHide={() => props.setModalShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <form onSubmit={props.formSubmitHandler}>
                <Modal.Header closeButton className='pe-4'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h5 className='mb-0'>Add Product</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label className='formLabel'>Name <span className='text-danger'>*</span></label>
                                <input type='text' name='name' className='form-control' valule={props.formData.name} onChange={props.inputChangeHandler} required />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label className='formLabel'>Code <span className='text-danger'>*</span></label>
                                <input type='number' maxLength='3' name='code' className='form-control' valule={props.formData.code} onChange={props.inputChangeHandler} required />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label className='formLabel'>Category <span className='text-danger'>*</span></label>
                                <Select
                                    options={selectCate}
                                    onChange={props.onChangeSelect}
                                    value={props.category}
                                    isMulti
                                    required
                                />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label className='formLabel'>Image <span className='text-danger'>*</span></label>
                                <input type='file' name='image' className='form-control' ref={props.fileRef} valule={props.formData.image} onChange={props.inputChangeHandler} accept='.png,.jpeg' required />
                                <small>Max file size: 2MB</small>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label className='formLabel'>Description</label>
                                <textarea rows='4' name='description' valule={props.formData.description} onChange={props.inputChangeHandler} className='form-control'></textarea>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='row'>
                        <div className='col-12 text-right pe-0'>
                            <button type='button' onClick={() => props.setModalShow(false)} className='btn btn-light me-2'>Cancel</button>
                            <button type='submit' className='btn btn-dark'>Submit</button>
                        </div>
                    </div>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

export default ModalForm;