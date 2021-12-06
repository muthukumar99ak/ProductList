import { useState, useRef } from 'react';
import { products } from './product_json';
import Product from './Product';
import ModalForm from './ModalForm';
import './product.css';

function ProductList() {
    const [things, setThings] = useState(products);
    const [modalShow, setModalShow] = useState(false);
    const [noRecord, setNoRecord] = useState(false)
    const [formData, setFormData] = useState({
        name: null,
        code: null,
        category: [],
        image: null,
        description: null
    })
    const fileRef = useRef()

    const inputChangeHandler = (e) => {
        setFormData(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const onChangeSelect = (selectedValue) => {
        let copyCat = formData.category.slice()
        let value = [...selectedValue.map(item => item.value)];
        setFormData(prevState => {
            return { ...prevState, category: [...value] }
        })
    }

    const searchProduct = (e) => {
        let curValue = e.target.value;
        let filteredProduct = products.filter(product => product.name.toLowerCase().includes(curValue.toLowerCase()))
        filteredProduct.length === 0 ? setNoRecord(true) : setNoRecord(false)
        setThings(filteredProduct)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        let filterByName = things.filter(item => formData.name.toLowerCase() === item.name.toLowerCase())
        let filterByCode = things.filter(item => formData.code == item.code)
        if (filterByName.length > 0) {
            alert("Name already registred. Try other names.")
        } else if (filterByCode.length > 0) {
            alert("Code already registred. Try other codes.")
        } else if (formData.category.length <= 0) {
            alert("Please select category.")
        } else if (!formData.image) {
            alert("Please select image.")
        } else if (formData.image && fileRef.current.files[0]) {
            if (!(fileRef.current.files[0].type === 'image/jpeg' || fileRef.current.files[0].type === 'image/png')) {
                alert('Please upload file having extensions .jpeg/.png only.');
            } else if (fileRef.current.files[0].size >= 2097152) {// 2097152bytes = 2mb 
                alert('Please upload image below size 2MB');
            }
        } else if (formData.name && formData.code && formData.category && formData.image) {
            setModalShow(false);
            setFormData({
                name: null,
                code: null,
                category: [],
                image: null,
                description: null
            })
            alert("Product added successfully")
        }

    }

    return (
        <div className='productCont'>
            <div className='row align-items-center'>
                <div className='col-sm-6 px-lg-4'>
                    <h4 className='heading mb-0'>Products</h4>
                </div>
                <div className='col-sm-6 px-lg-4'>
                    <div className='d-flex align-items-center justify-content-end'>
                        <input type='text' onChange={searchProduct} className='form-control searchInput me-3' placeholder='Search...' />
                        <button className='btn btn-dark' onClick={() => setModalShow(true)}>Add Product</button>
                    </div>
                </div>
            </div>
            <div className='row mt-2'>
                {noRecord ? <div className='col-12 mt-5'><h5 className='text-center text-dark'>No record found</h5></div> : null}
                {things.map(item => {
                    return <Product key={item.code} product={item} />
                })}
            </div>

            {/* Modal */}
            <ModalForm
                formData={formData}
                modalShow={modalShow}
                setModalShow={setModalShow}
                formSubmitHandler={formSubmitHandler}
                inputChangeHandler={inputChangeHandler}
                onChangeSelect={onChangeSelect}
                fileRef={fileRef}
            />

        </div>
    )
}

export default ProductList;