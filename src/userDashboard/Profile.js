import React from 'react'
import { isAutheticated } from '../auth/helper'
import Base from '../core/Base'




function Profile() {

    const { user } = isAutheticated()

    return (
        <Base>
            <div>
                <div className="card mb-4">
                    <h4 className="card-header">Profile Information</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="badge badge-success mr-2">Name:</span> {user.name}
                        </li>
                        <li className="list-group-item">
                            <span className="badge badge-success mr-2">Email:</span> {user.email}
                        </li>
                        <li className="list-group-item">
                            <span className="badge badge-success mr-2">Contact Numbers:</span> {user.phoneNumber}
                        </li>

                        <li className="list-group-item">
                            <span className="badge badge-danger">Profile Area</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Base>
    )
}

export default Profile
