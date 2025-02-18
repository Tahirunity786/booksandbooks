import React from 'react'
import styles from './slug.module.css'
import InputGroup from '@/components/InputGroup/InputGroup'


const Page = () => {
    const leftInput = [
        { name: "Product ID", type: "number", disable: true, id: "ID" },
        { name: "Product Name", type: "text", id: "Name" },
        { name: "Company", type: "text", id: "Company" },
        { name: "Retail Price", type: "number", id: "Retail" },

    ];
    const rightInput = [
        { name: "% Apply", type: "text", id: "apply" },
        { name: "Purchase Price", type: "text", disable: true, id: "PurchasePrice" },
        { name: "Company", type: "text", id: "Company" },
        { name: "Supplier", type: "text", id: "supplier" },

    ];
    return (
        <section className={styles.mtp3050}>
            <h3 className='mb-1'>Add New Product</h3>
            <div className={styles.row}>
                <div className={styles.colLg6}>
                    {
                        leftInput.map((items, index) => {
                            return (
                                <div key={items.id}> {/* Use the key here on the wrapper element */}
                                    <label htmlFor={items.id} style={{ fontSize: "14px", marginBottom: "5px" }}>{items.name}</label> {/* Set the label's htmlFor attribute */}
                                    <InputGroup type={items.type} id={items.id} isDisabled={items.disable} /> {/* Pass the id as a prop to InputGroup for association */}
                                </div>
                            );
                        })
                    }

                </div>
                <div className={styles.colLg6}>
                    {
                        rightInput.map((items, index) => {
                            return (
                                <div key={items.id}> {/* Use the key here on the wrapper element */}
                                    <label htmlFor={items.id} style={{ fontSize: "14px", marginBottom: "5px" }}>{items.name}</label> {/* Set the label's htmlFor attribute */}
                                    <InputGroup type={items.type} id={items.id} isDisabled={items.disable} /> {/* Pass the id as a prop to InputGroup for association */}
                                </div>
                            );
                        })
                    }
                    <div className={styles.row}>
                        <div className={styles.colLg6} style={{ padding: "0px 5px" }}>
                            <label htmlFor="Class" style={{ fontSize: "14px", marginBottom: "5px" }}>Class</label>
                            <InputGroup type='text' id='Class' />
                        </div>
                        <div className={styles.colLg6} style={{ padding: "0px 5px" }}>
                            <label htmlFor="Class" style={{ fontSize: "14px", marginBottom: "5px" }}>Product Unit</label>
                            <InputGroup type='text' id='Class' isDisabled={true} placeholder='PCs' />
                        </div>
                    </div>
                    <div>
                    <button className={styles.button}>Save Products</button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page
