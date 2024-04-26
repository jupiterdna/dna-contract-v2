const data = {
    document_type: 'contract',
    header: {
        title: 'Colorado Rental Agreement',
        subtitle: 'Agreement #: GO123456',
    },
    header_boxes: {
        left: {
            first_heading: {
                label: 'Date & Time Out',
                value: '12/12/2021 12:00 PM',
            },
            second_heading: {
                label: 'Go rentals Colorado Contract',
                value: 'Colorado Convention Center, 14th Street, Denver, CO, USA',
            },
            contact: '(678) 768-7687',
            date: {
                date: '31',
                month: 'Aug',
            },
        },
        right: {
            first_heading: {
                label: 'Date & Time In',
                value: 'Wednesday, Sep 6, 2023 10:59AM',
            },
            second_heading: {
                label: 'Go Rentals Colorado Contract',
                value: 'Colorado Convention Center, 14th Street, Denver, CO, USA',
            },
            contact: '(678) 768-7687',
            date: {
                date: '30',
                month: 'Aug',
            },
        },
    },
    renter_info: {
        renter: 'Shanon Miller Farmer',
        additional_driver: 'N/A',
        tail_number: 'N/A',
        // Add more fields as needed
    },
    vehicle_info: [
        {
            license_no: '1234567',
            checkout: '12/12/2021 12:00 PM',
            checkin: '12/12/2021 12:00 PM',
            vehicle_name: 'Toyota Camry 2023 Model',
            vin: '1234567890',
            fuel_in: '8/8',
            fuel_out: '1/2',
            milage_in: '4,200',
            milage_out: '3,200',
            miles_per_day: '100',
            unit_no: '123456',
            vehicle_type: 'Original Exchange 1',
            vehicle_image: '', // Add image path here
        },
        {
            license_no: '1234567',
            checkout: '12/12/2021 12:00 PM',
            checkin: '12/12/2021 12:00 PM',
            vehicle_name: 'Toyota Camry',
            vin: '1234567890',
            fuel_in: '8/8',
            fuel_out: '1/2',
            milage_in: '4,200',
            milage_out: '3,200',
            miles_per_day: '100',
            unit_no: '123456',
            vehicle_type: 'Vehicle Exchange 1',
            vehicle_image: '', // Add image path here
        },
    ],

    vehicle_damage: {
        signature_image: '', // Add image source here
        damage: {
            chip: 1,
            crack: 5,
            dent: 2,
            missing: 0,
            paint_swap: 0,
            scratch: 2,
        },
    },

    estimated_charges: [
        {
            id: 'header',
            headers: [
                {
                    label: 'Vehicle Charges',
                },
                {
                    label: 'Price/Unit',
                },
                {
                    label: 'QTY',
                },
                {
                    label: 'Subtotal',
                },
            ],
            rows: [
                {
                    price_unit: '$120.00/Day',
                    charge_name: 'Daily Rate',
                    qty: '7',
                    subtotal: '$840.00',
                },
                {
                    price_unit: '$40.00/Hour',
                    charge_name: 'Hourly Rate',
                    qty: '2',
                    subtotal: '$80.00',
                },
                {
                    price_unit: '$720.00/Hour',
                    charge_name: 'Weekly Rate',
                    qty: '0',
                    subtotal: '$0.00',
                },
                {
                    price_unit: '$2,880.00/Hour',
                    charge_name: 'Monthly Rate',
                    qty: '0',
                    subtotal: '$0.00',
                },
                {
                    price_unit: '$120.00/Day',
                    charge_name: 'Daily Rate',
                    qty: '7',
                    subtotal: '$840.00',
                },
            ],
        },
        {
            id: 'fees',
            headers: [
                {
                    label: 'Fees',
                },
            ],
            rows: [
                {
                    price_unit: '$120.00/Day',
                    charge_name: 'Daily Rate',
                    qty: '7',
                    subtotal: '$840.00',
                },
                {
                    price_unit: '$40.00/Hour',
                    charge_name: 'Hourly Rate',
                    qty: '2',
                    subtotal: '$80.00',
                },
                {
                    price_unit: '$720.00/Hour',
                    charge_name: 'Weekly Rate',
                    qty: '0',
                    subtotal: '$0.00',
                },
                {
                    price_unit: '$2,880.00/Hour',
                    charge_name: 'Monthly Rate',
                    qty: '0',
                    subtotal: '$0.00',
                },
                {
                    price_unit: '$120.00/Day',
                    charge_name: 'Daily Rate',
                    qty: '7',
                    subtotal: '$840.00',
                },
            ],
        },
    ],
    notice_info: {
        signature_image: '', // Add image source here
    },
    converage_info: [
        {
            title: 'Collision Damage Waiver (CDW)',
            signature_type: 'accept',
            signature_id: 'cdw_123',
            signature_image: '', // Add image source here
            description: 'If you initial “accept,” you agree to purchase CDW and, subject to the provisions of Para-graph 8 of the Terms and Conditions, we will waive your financial responsibility for collision damage to the Vehicle. There are exclusions. See paragraph 8 of the Rental Agreement Terms and Conditions (or Master Rental Agreement Terms and Conditions, if applicable) for additional information. If you initial “decline,” you decline to purchase CDW, and you will be responsible for all damage to or loss of the Vehicle. See paragraph 5 of the Rental Agreement Terms and Conditions (or paragraph 6 of the Master Rental Agreement Terms and Conditions if applicable) for additional information on your responsibility for damage.',
        },
        {
            title: 'Personal Accident Insurance/Personal Effects Coverage (PAI/PEC)',
            signature_type: 'decline',
            signature_id: 'pai_pec_123',
            signature_image: '', // Add image source here
            description: 'If you accept, you agree to purchase PAI/PEC. A summary of the terms of the PAI/PEC insur-ance policy is contained in a separate brochure that you acknowledge receiving.',
        },
        {
            title:
                'Renter`s Liability Protection (RLP) and Supplemental Liability Insurance (SLI)',
            signature_type: 'decline',
            signature_id: 'rlp_sli_123',
            signature_image: '', // Add image source here
            description: 'If you initial "accept," you agree to purchase RLP and SLI. RLP provides primary liability cov-erage up to the minimum financial responsibility limits of the State of Colorado. A sum-mary of the terms of the RLP policy and SLI policy are contained in separate brochures that you acknowledge receiving. RLP and SLI do not cover all risks. There are exclusions for unauthorized drivers, driving while intoxicated, and other conditions. There is no first party uninsured motorist coverage, and there may be no coverage for passengers in the Vehicle. If you initial "decline," you decline to purchase SLI, and you agree to be primarily responsible for all injury or damage you cause to others or their property. Please read the brochure carefully.',
        },
    ],
    agreement: {
        content: '', //optional
        signature_image: '', // Add image source here,
        additional_signatures: [], // Add images source here for additional signatures
    },

    footer_info: {
        date: '', //optional
        signature_image: '', // Add image source here
    },
};
