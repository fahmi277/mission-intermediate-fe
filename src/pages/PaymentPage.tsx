import React, { Component } from 'react'
import PaymentMethode from '../components/molecules/PaymentMethode'
import CoursePromoBanner from '../components/molecules/CoursePromoBanner'

export default class PaymentPage extends Component {
    render() {
        return (
            <div>

                <div>PaymentPage</div>
                <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl mx-auto px-4 py-8 ">

                    <PaymentMethode />
                    <div className="w-full md:max-w-[200px]">
                        <CoursePromoBanner />

                    </div>

                </div>
            </div>
        )
    }
}
