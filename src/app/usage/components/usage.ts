export const usage = `import axios from 'axios';
import React from 'react';
import {data} from './data';  

const App = () => {

    const generatePDFfile = async () => {
        const response = await axios.post('http://form-contract.development.local/generate-pdf/',  data)
        console.log('PDF source result: ', response.data)
        // PDF source result:  {data: '...base64 data'}
    }
    
    return (
        <div>
            <button 
                onClick={() => {
                    generatePDFfile()
                }}>
                Generate Contract PDF
            </button>    
        </div>
    )
}

export default App;`

export const usageReceipt = `import axios from 'axios';
import React from 'react';
import {receiptData} from './data';  

const App = () => {

    const generatePDFfile = async () => {
        const response = await axios.post('http://form-contract.development.local/generate-pdf/',  data)
        console.log('PDF source result: ', response.data)
        // PDF source result:  {data: '...base64 data'}
    }
    
    return (
        <div>
            <button 
                onClick={() => {
                    generatePDFfile()
                }}>
                Generate Contract PDF
            </button>    
        </div>
    )
}

export default App;`

export const contractData = `export const data = {
    document_type: 'contract',
    state: 'Colorado',   //specify the state
    header: {
      title: 'Colorado Go Rental Agreement',
      subtitle: 'Agreement #: GO1234567',
    },
    header_boxes: {
      left: {
        first_heading: {
          label: 'Date & Time Outs',
          value: '12/12/2021 13:00 PM',
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
      renter: 'Shanons Miller Farmers',
      additional_driver:
        'Juphet Vitualla, Jupiter, Ancara Messi, jupiter 2, testing',
      tail_number: 'N/A',
    },
    vehicle_info: [
      {
        license_no: '12345678',
        checkout: '12/12/2021 12:00 PM',
        checkin: '12/12/2021 12:00 PM',
        vehicle_name: 'Toyota Camry 2023 Model',
        vin: '12345678905',
        fuel_in: '8/8',
        fuel_out: '1/2',
        milage_in: '4,200',
        milage_out: '3,200',
        miles_per_day: '100',
        unit_no: '123456',
        vehicle_type: 'Original Exchange 1',
        vehicle_image: '',
      },
    ],
    vehicle_damage: {
      signature_image:
        'https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png',
      vehicle_image: '',
      damage: {
        chip: 1, crack: 2, dent: 3, missing: 4, paint_swap: 5, scratch: 6
      },
    },
    estimated_charges: [
      {
        id: 'header',
        row_type: '',
        headers: [ { label: 'Vehicle Charges', }, { label: 'Price/Unit', }, { label: 'QTY', }, { label: 'Subtotal', }, ],
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
        row_type: '',
        headers: [ { label: 'Fees', }, ],
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
          }
        ],
      },
      {
        id: 'discount', 
        row_type: 'discount', //if discount just add 'discount' value to add color red to the row
        headers: [ { label: 'Discount', }, ],
        rows: [
          {
            price_unit: 'Discount',
            charge_name: 'Daily Rate',
            qty: '7',
            subtotal: '$840.00',
          },
        ],
      },
    ],
    notice_info: {
      signature_image:
        'https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png',
    },
    optional_insurance_policies: {
      signature_image:
        'https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png',
    },
    converage_info: [
      {
        title: 'Collision Damage Waiver (CDW)',
        signature_type: 'accept',
        signature_id: 'cdw_123',
        signature_image:
          'https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png',
        description:
          'If you initial “accept,” you agree to purchase CDW and, subject to the provisions of Para-graph 8 of the Terms and Conditions, we will waive your financial responsibility for collision damage to the Vehicle. There are exclusions. See paragraph 8 of the Rental Agreement Terms and Conditions (or Master Rental Agreement Terms and Conditions, if applicable) for additional information. If you initial “decline,” you decline to purchase CDW, and you will be responsible for all damage to or loss of the Vehicle. See paragraph 5 of the Rental Agreement Terms and Conditions (or paragraph 6 of the Master Rental Agreement Terms and Conditions if applicable) for additional information on your responsibility for damage.',
      },
      {
        title: 'Personal Accident Insurance/Personal Effects Coverage (PAI/PEC)',
        signature_type: 'decline',
        signature_id: 'pai_pec_123',
        signature_image: '',
        description:
          'If you accept, you agree to purchase PAI/PEC. A summary of the terms of the PAI/PEC insur-ance policy is contained in a separate brochure that you acknowledge receiving.',
      }
    ],
    agreement: {
      signature_image:
        'https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png',
      additional_signatures: [
        'https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png',
      ],
    },
    footer_info: {
      date: '05-23-2024',
      signature_image:
        'https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png',
    },
  };
  `

  export const receipt = `
  export const receiptData = {
    document_type: 'receipt',
    state: 'Arizona',
    header: {
      title: 'Receipt',
      subtitle: 'GO1234567',
    },
    header_boxes: {
      left: {
        first_heading: {
          label: 'Date & Time Outs',
          value: '12/12/2021 13:00 PM',
        },
        second_heading: {
          label: 'Go rentals Arizona Contract',
          value: 'Arizona Convention Center, 14th Street, Denver, CO, USA',
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
          label: 'Go Rentals Arizona Contract',
          value: 'Arizona Convention Center, 14th Street, Denver, CO, USA',
        },
        contact: '(678) 768-7687',
        date: {
          date: '30',
          month: 'Aug',
        },
      },
    },
    renter_info: {
      renter: 'Shanons Miller Farmers',
      additional_driver:
        'Juphet Vitualla, Jupiter, Ancara Messi, jupiter 2, testing',
      tail_number: 'N/A',
    },
    vehicle_info: [
      {
        license_no: '12345678',
        checkout: '12/12/2021 12:00 PM',
        checkin: '12/12/2021 12:00 PM',
        vehicle_name: 'Toyota Camry 2023 Model',
        vin: '12345678905',
        fuel_in: '8/8',
        fuel_out: '1/2',
        milage_in: '4,200',
        milage_out: '3,200',
        miles_per_day: '100',
        unit_no: '123456',
        vehicle_type: 'Original Exchange 1',
        vehicle_image: '',
      },
    ],
    estimated_charges: [
      {
        id: 'header',
        headers: [
          {
            label: 'Vehicle Charges',
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
            qty: '7',
            subtotal: '$840.00',
          },
          {
            price_unit: '$40.00/Hour',
            qty: '2',
            subtotal: '$80.00',
          },
          {
            price_unit: '$720.00/Hour',
            qty: '0',
            subtotal: '$0.00',
          },
          {
            price_unit: '$2,880.00/Hour',
            qty: '0',
            subtotal: '$0.00',
          },
          {
            price_unit: '$120.00/Day',
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
            qty: '7',
            subtotal: '$840.00',
          },
          {
            price_unit: '$40.00/Hour',
            qty: '2',
            subtotal: '$80.00',
          },
          {
            price_unit: '$720.00/Hour',
            qty: '0',
            subtotal: '$0.00',
          },
          {
            price_unit: '$2,880.00/Hour',
            qty: '0',
            subtotal: '$0.00',
          },
          {
            price_unit: '$120.00/Day',
            qty: '7',
            subtotal: '$840.00',
          },
        ],
      },
    ],
    total_charges: '20',
    amount_charges: {
      amount: '$2000',
      payment_method: '12345',
    },
    points: '100',
  };`