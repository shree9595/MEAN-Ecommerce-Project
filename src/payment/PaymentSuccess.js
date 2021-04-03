import React from 'react'
import { Link } from 'react-router-dom'
import Base from '../core/Base'


function PaymentSuccess() {
    return (
        <Base description="Order" title="Order Comfermation">
            <div>
                <h3>
                    Successfully Order Place
                </h3>
                <div>
                    <Link
                        to="/user/dashboard/order"
                    >
                        My Order
                        </Link>
                </div>
            </div>
        </Base>
    )
}

export default PaymentSuccess
