"use client";

import { Inter, Krona_One } from "next/font/google";
const krona = Krona_One({
  weight: ["400"],
  subsets: ["latin"],
});

import React from "react";
import {
  ContractDocumentWrapper,
  EstimatedCharges,
  Header,
  PickupDetails,
  RenterInformation,
  VehicleDamage,
  VehicleInformation,
  Signature,
  Coverage,
  Agreement,
  TermsAndConditions,
  PBold,
  PBoldUnderline,
  PInline,
  TextBlock,
  PUnderline,
  Link,
  ContextType,
} from "@playbook/pdf-components";

// sample assets
import car from "../assets/car.png";
import Glogo from "../assets/Glogo.png";
import symbols_chip from "../assets/symbols-chip.png";
import symbols_crack from "../assets/symbols-crack.png";
import symbols_dent from "../assets/symbols-dent.png";
import symbols_missing from "../assets/symbols-missing.png";
import symbols_paint_swap from "../assets/symbols-paint-swap.png";
import symbols_scratch from "../assets/symbols-scratch.png";
import vehicle_screenshot from "../assets/vehicle_damage_marks.png";

const ContractTemplate = React.forwardRef<
  React.ElementRef<typeof ContractDocumentWrapper>,
  React.ComponentPropsWithoutRef<typeof ContractDocumentWrapper> & ContextType
>((props, ref) => (
  <ContractDocumentWrapper ref={ref} {...props}>
    {/* <Header
      title="Colorado Rental Agreement"
      sub_title="Agreement #: G01009946"
      logo_url={Glogo.src}
    /> */}
    <div className="flex justify-between items-center mb-4">
      <div className="w-[160px]">
        <img src={Glogo.src} alt="logo" />
      </div>
      <div className={`flex flex-col text-right uppercase ${krona.className}`}>
        <div className="text-sm">Colorado Rental Agreement</div>
        <span>Agreement#: GO123456</span>
      </div>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "6pt",
      }}
    >
      <PickupDetails
        title="Date & Time Out"
        long_date="Wednesday, Aug 30, 2023 08:58AM"
        short_date={{
          month: "Aug",
          date: "30",
        }}
        address_heading="Go Rentals Colorado Contract"
        address_details="Colorado Convention Center, 14th Street, Denver, CO, USA"
        phone_number="(678) 768-7687"
      />
      <PickupDetails
        title="Date & Time In"
        long_date="Wednesday, Sep 6, 2023 10:59AM"
        short_date={{
          month: "Sep",
          date: "6",
        }}
        address_heading="Go Rentals Colorado Contract"
        address_details="Colorado Convention Center, 14th Street, Denver, CO, USA"
        phone_number="(678) 768-7687"
      />
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "6pt",
      }}
    >
      <RenterInformation renter_full_name="Shannon Miller Farmer" />
      <VehicleInformation
        vehicle_image={car.src}
        vehicle_name="2020 Blue TOTOYA CAMRY"
        vin="JH4DA3350JS000592"
        license_number="OK3642234"
        mileage_out="120"
        fuel_out="8/8"
        miles_day_free="90"
      />
    </div>

    <div
      style={
        props.template === "1"
          ? {
              margin: 0,
              padding: 0,
            }
          : {
              display: "flex",
              justifyContent: "space-between",
              gap: "6pt",
            }
      }
    >
      <VehicleDamage
        marker={{
          dent: {
            count: "0",
            icon_url: symbols_dent.src,
          },
          missing: {
            count: "1",
            icon_url: symbols_missing.src,
          },
          chip: {
            count: "1",
            icon_url: symbols_chip.src,
          },
          scratch: {
            count: "1",
            icon_url: symbols_scratch.src,
          },
          paint_swap: {
            count: "0",
            icon_url: symbols_paint_swap.src,
          },
          crack: {
            count: "0",
            icon_url: symbols_crack.src,
          },
        }}
        vehicle_screenshot_url={vehicle_screenshot.src}
        signature_id="vehicle_damage_123"
        onSignatureClick={() => alert("Handle signature click here...")}
        style_overrides={{
          section_container: {
            marginTop: props.render_style === "print" ? "-2pt" : 0,
          },
          container: {
            gap: "6pt",
          },
        }}
      />
      <EstimatedCharges
        style_overrides={{
          section_header: {
            style_overrides: {
              container: {
                marginTop:
                  props.render_style === "print" && props.template === "1"
                    ? "60pt"
                    : "8pt",
              },
            },
          },
        }}
        value={[
          {
            header: {
              charge_name: "Vehicle Charges",
              price_unit: "Price/Unit",
              qty: "QTY",
              subtotal: "Subtotal",
            },
            rows: [
              {
                charge_name: "Daily Rate",
                price_unit: "$120.00/Day",
                qty: "7",
                subtotal: "$840.00",
              },
              {
                charge_name: "Hourly Rate",
                price_unit: "$40.00/Hour",
                qty: "2",
                subtotal: "$80.00",
              },
              {
                charge_name: "Weekly Rate",
                price_unit: "$720.00/Hour",
                qty: "0",
                subtotal: "$0.00",
              },
              {
                charge_name: "Monthly Rate",
                price_unit: "$2,880.00/Hour",
                qty: "0",
                subtotal: "$0.00",
              },
              {
                charge_name: "Daily Rate",
                price_unit: "$120.00/Day",
                qty: "7",
                subtotal: "$840.00",
              },
              {
                charge_name: "Hourly Rate",
                price_unit: "$40.00/Hour",
                qty: "2",
                subtotal: "$80.00",
              },
              {
                charge_name: "Weekly Rate",
                price_unit: "$720.00/Hour",
                qty: "0",
                subtotal: "$0.00",
              },
              {
                charge_name: "Monthly Rate",
                price_unit: "$2,880.00/Hour",
                qty: "0",
                subtotal: "$0.00",
              },
              {
                charge_name: "Daily Rate",
                price_unit: "$120.00/Day",
                qty: "7",
                subtotal: "$840.00",
              },
              {
                charge_name: "Hourly Rate",
                price_unit: "$40.00/Hour",
                qty: "2",
                subtotal: "$80.00",
              },
              {
                charge_name: "Weekly Rate",
                price_unit: "$720.00/Hour",
                qty: "0",
                subtotal: "$0.00",
              },
              {
                charge_name: "Monthly Rate",
                price_unit: "$2,880.00/Hour",
                qty: "0",
                subtotal: "$0.00",
              },
            ],
          },
          {
            header: {
              charge_name: "Coverages",
              price_unit: "",
              qty: "",
              subtotal: "",
            },
            rows: [
              {
                charge_name: "CDW",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
              {
                charge_name: "PAI/PEC",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
              {
                charge_name: "RLP/SLI",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
              {
                charge_name: "CDW",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
              {
                charge_name: "PAI/PEC",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
              {
                charge_name: "RLP/SLI",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
              {
                charge_name: "CDW",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
              {
                charge_name: "PAI/PEC",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
              {
                charge_name: "RLP/SLI",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
              {
                charge_name: "CDW",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
              {
                charge_name: "PAI/PEC",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
              {
                charge_name: "RLP/SLI",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
              {
                charge_name: "CDW",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
              {
                charge_name: "PAI/PEC",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
              {
                charge_name: "RLP/SLI",
                price_unit: "$70.00/Daily",
                qty: "7",
                subtotal: "$490.00",
              },
            ],
          },
          {
            header: {
              charge_name: "Fees",
              price_unit: "",
              qty: "",
              subtotal: "",
            },
            rows: [
              {
                charge_name: "Included Miles",
                price_unit: "$0.00/Trip",
                qty: "630",
                subtotal: "$0.00",
              },
              {
                charge_name: "Additional Miles",
                price_unit: "$2.50/Mile",
                qty: "1",
                subtotal: "$0.00",
              },
              {
                charge_name: "Movement Fee",
                price_unit: "$0.00/Trip",
                qty: "1",
                subtotal: "$0.00",
              },
              {
                charge_name: "Delivery Fee",
                price_unit: "$0.00/Trip",
                qty: "1",
                subtotal: "$0.00",
              },
              {
                charge_name: "Pickup Fee",
                price_unit: "$0.00/Trip",
                qty: "1",
                subtotal: "$0.00",
              },
              {
                charge_name: "Additional Miles",
                price_unit: "$2.50/Mile",
                qty: "1",
                subtotal: "$0.00",
              },
              {
                charge_name: "Movement Fee",
                price_unit: "$0.00/Trip",
                qty: "1",
                subtotal: "$0.00",
              },
              {
                charge_name: "Delivery Fee",
                price_unit: "$0.00/Trip",
                qty: "1",
                subtotal: "$0.00",
              },
              {
                charge_name: "Pickup Fee",
                price_unit: "$0.00/Trip",
                qty: "1",
                subtotal: "$0.00",
              },
            ],
          },
          {
            header: {
              charge_name: "Taxes",
              price_unit: "",
              qty: "",
              subtotal: "",
            },
            rows: [
              {
                charge_name: "Barcelona Corporate",
                price_unit: "$46.00/Trip",
                qty: "1",
                subtotal: "$46.00",
              },
              {
                charge_name: "Tax",
                price_unit: "",
                qty: "",
                subtotal: "",
              },
              {
                charge_name: "Rome Federal Tax",
                price_unit: "$460.00/Trip",
                qty: "1",
                subtotal: "$460.00",
              },
            ],
          },
        ]}
      />
    </div>

    <TextBlock
      style={{ paddingTop: props.render_style === "screen" ? "8pt" : "20pt" }}
    >
      <PBold>
        NOTICE: THIS CONTRACT OFFERS, FOR AN ADDITIONAL CHARGE, A COLLISION
        DAMAGE WAIVER TO COVER YOUR RE-SPONSIBILITY FOR DAMAGE TO THE VEHICLE.
        YOU ARE ADVISED NOT TO SIGN THIS WAIVER IF YOU HAVE RENTAL VE-HICLE
        COLLISION COVERAGE PROVIDED BY CERTAIN GOLD OR PLATINUM CREDIT CARDS OR
        COLLISION INSURANCE ON YOUR OWN VEHICLE. BEFORE DECIDING WHETHER TO
        PURCHASE THE COLLISION DAMAGE WAIVER, YOU MAY WISH TO DETERMINE WHETHER
        YOUR OWN VEHICLE INSURANCE AFFORDS YOU COVERAGE FOR DAMAGE TO THE RENTAL
        VEHICLE AND THE AMOUNT OF THE DEDUCTIBLE UNDER YOUR OWN INSURANCE
        COVERAGE. THE PURCHASE OF THIS COLLISION DAMAGE WAIVER IS NOT MANDATORY
        AND MAY BE WAIVED.
      </PBold>
    </TextBlock>
    <TextBlock>
      <PBold>
        THE LIMITATIONS AND EXCLUSIONS THAT APPLY TO THE COLLISION DAMAGE WAIVER
        ARE LISTED IN PARAGRAPH 8 OF THE RENTAL AGREEMENT TERMS AND CONDITIONS
      </PBold>
    </TextBlock>

    <div style={{ width: "130pt" }}>
      <Signature
        id="EC_123"
        bottome_label={`Renter's Signature`}
        onSignatureClick={() => alert("Handle signature click here...")}
      />
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5pt",
        marginTop: "5pt",
      }}
    >
      <TextBlock
        style={{
          paddingTop:
            props.template === "1" && props.render_style === "print"
              ? "15pt"
              : "5pt",
        }}
      >
        <PBold>
          The daily cost of collision damage waiver is $10 to $10. The total
          estimated cost of collision damage waiver is $0.
        </PBold>
      </TextBlock>
      <TextBlock>
        <PInline>
          Failure to return the Vehicle within 72 hours of the due-in date is a
          felony according to Colorado Revised Statutes 18-4-401.
        </PInline>
      </TextBlock>
      <TextBlock>
        <PInline>Pursuant to the requirements of </PInline>
        <PUnderline>C.R.S. 43-3-302(7)(b) </PUnderline>
        <PInline>and </PInline>
        <PUnderline>C.R.S. 42- 4-1209, </PUnderline>
        <PInline>
          You (the Renter) are liable for payment of any toll evasion violation
          civil penalties and any parking violation fines incurred on or after
          the date you take possession of the Vehicle. If such a penalty is
          incurred, Your name, address, and state driver's license number will
          be furnished to the toll road or toll highway company (for toll
          violations) or to the prosecutorial division of the appropriate
          “jurisdiction (for parking violation fines)
        </PInline>
      </TextBlock>
      <TextBlock>
        <PBoldUnderline>
          Notice and Acknowledgment Regarding Chain/Traction Law.{" "}
        </PBoldUnderline>
        <PInline>
          You have sole responsibility for compliance with all chain/ traction
          laws, statutes, regulations, and ordinances, including C.R.S. q
          42-4-106. We make no representations or warranties that the Vehicle
          complies with any chain/traction law, statute, regulation, or
          ordinance. For more information about Colorado's chain/traction laws,
          please review the Colorado Department of Transportation's Fact
          Sheet-Traction Law and Passenger Vehicle Chain Law and its website at:{" "}
        </PInline>
        <Link href="https://www.codot.gov/travel/colorado-chain-law/faj#collapse6">
          https://www.codot.gov/travel/colorado-chain-law/faj#collapse6
        </Link>
      </TextBlock>
    </div>

    <Coverage
      style_overrides={{
        main_container: {
          paddingTop: "25pt",
        },
      }}
      sections_data={[
        {
          title: "Collision Damage Waiver (CDW)",
          signature_type: "accept",
          signature_id: "cdw_123",
          onSignatureClick: () =>
            alert("Handle accept signature click here..."),
          content_details: (
            <p>
              If you initial “accept,” you agree to purchase CDW and, subject to
              the provisions of Para-graph 8 of the Terms and Conditions, we
              will waive your financial responsibility for collision damage to
              the Vehicle. There are exclusions. See paragraph 8 of the Rental
              Agreement Terms and Conditions (or Master Rental Agreement Terms
              and Conditions, if applicable) for additional information. If you
              initial “decline,” you decline to purchase CDW, and you will be
              responsible for all damage to or loss of the Vehicle. See
              paragraph 5 of the Rental Agreement Terms and Conditions (or
              paragraph 6 of the Master Rental Agreement Terms and Conditions if
              applicable) for additional information on your responsibility for
              damage.
            </p>
          ),
        },
        {
          title:
            "Personal Accident Insurance/Personal Effects Coverage (PAI/PEC)",
          signature_type: "decline",
          signature_id: "pai_pec_123",
          onSignatureClick: () =>
            alert("Handle decline signature click here..."),
          content_details: (
            <p>
              If you accept, you agree to purchase PAI/PEC. A summary of the
              terms of the PAI/PEC insur-ance policy is contained in a separate
              brochure that you acknowledge receiving.
            </p>
          ),
        },
        {
          title:
            "Renter's Liability Protection (RLP) and Supplemental Liability Insurance (SLI)",
          signature_type: "decline",
          signature_id: "rlp_sli_123",
          onSignatureClick: () =>
            alert("Handle decline signature click here..."),
          content_details: (
            <p>
              If you initial "accept," you agree to purchase RLP and SLI. RLP
              provides primary liability cov-erage up to the minimum financial
              responsibility limits of the State of Colorado. A sum-mary of the
              terms of the RLP policy and SLI policy are contained in separate
              brochures that you acknowledge receiving. RLP and SLI do not cover
              all risks. There are exclusions for unauthorized drivers, driving
              while intoxicated, and other conditions. There is no first party
              uninsured motorist coverage, and there may be no coverage for
              passengers in the Vehicle. If you initial "decline," you decline
              to purchase SLI, and you agree to be primarily responsible for all
              injury or damage you cause to others or their property. Please
              read the brochure carefully.
            </p>
          ),
        },
      ]}
    />

    <Agreement
      style_overrides={{
        section_header: {
          style_overrides: {
            container: {
              marginTop: props.render_style === "print" ? "25pt" : "8pt",
            },
          },
        },
      }}
      renter_signature_id="agreement_rs"
      onRenterSignatureClick={() =>
        alert("Handle renter signature click here...")
      }
      driver_signature_id="agreement_ds"
      onDriverSignatureClick={() =>
        alert("Handle driver signature click here...")
      }
      content='By signing below, you certify that you (1) had the opportunity to read, and that you agree to, the terms and conditions of this agreement as set forth on this Rental Agreement Face Page and in either the Rental Agreement Terms and Condi-tions or the Master Rental Terms and Conditions (the ”Agreement"), (2) authorize us to process a separate payment card transaction in your name for all Charges, (3) authorize us to release your billing and rental information to a third-party processor for billing and processing purposes& (4) authorize us or a third-party processor to charge your payment card account after the rental concludes for any Tolls or Violations assessed against you, us or the Vehicle during this rental plus taxes, administrative fees of up to $50 per Toll or Violation, convenience fees, service charges, and related fees; (6) accept or decline Optional Products as shown on the Face Page; (7) understand that all Charges are subject to our final audit and authorize us to adjust your payment card account to reflect changes resulting from our audit; (8) understand that the purchase of optional insurance products or CDW is not rejuired to rent the Vehicle, and that the optional in-surance products and CDW that we offer may duplicate coverage provided by your personal automobile insurance policy or another source of coverage; and (9) agree to our collection and use of vehicle data and texting and calling terms as described in Paragraphs 15 and 17 of the Rental Agreement Terms and Conditions (or the Master Rental Agreement Terms and Conditions if applicable).'
    />
    <TermsAndConditions
      signature_id="terms_and_conditions_123"
      section_title="Go Rentals Rental Agreement Terms and Conditions - Colorado"
      onRenterSignatureClick={() => alert("Handle renters signature here...")}
      date="08/15/2023"
      content={
        <div style={{ padding: 0, margin: 0 }}>
          {/* 1. */}
          <TextBlock>
            <PBold>1. </PBold>
            <PBoldUnderline>AGREEMENT AND PARTIES. </PBoldUnderline>
            <PInline>
              These Rental Agreement Terms and Conditions, the Rental Agreement
              Face Page signed by you, and any other documents which you are
              rejuired to sign to rent the vehicle together constitute the
              rental agreement (the ”Agreement") between you (the renter) and
              Gitibin & Associates, Inc., a California corporation doing
              business as ”Go Rentals" (”Go Rentals")
            </PInline>
          </TextBlock>

          {/* 2. */}
          <TextBlock>
            <TextBlock>
              <PBold>2. </PBold>
              <PBoldUnderline>DEFINITIONS.</PBoldUnderline>
            </TextBlock>
            <TextBlock>
              <PInline>
                (a) ”Additional Mandatory Charges" means any separately stated
                charges that we require you pay that specifically relate to the
                operation of a rental vehicle, including customer facility
                charges, airport concession recovery fees, road safety program
                fees, vehicle license recovery fees, or any government-imposed
                tax or fee.
              </PInline>
            </TextBlock>
            <TextBlock>
              <PInline>(b) </PInline>
              <PBold>“Authorized Driver” </PBold>
              <PInline>
                means a driver authorized to use the Vehicle. Except where
                otherwise specifically authorized by applicable motor vehicle
                rental law, only the renter and an additional driver listed by
                us on your Rental Agreement Face Page at the time of rental are
                authorized to drive the Vehicle. Except as otherwise required by
                applicable law, each Authorized Driver must have a valid
                driver's license and be at least age 25.
              </PInline>
            </TextBlock>
            <TextBlock>
              <PInline>(c) </PInline>
              <PBold>“CDW” </PBold>
              <PInline>means Collision Damage Waiver.</PInline>
            </TextBlock>
            <TextBlock>
              <PInline>(d) </PInline>
              <PBold>“Charges” </PBold>
              <PInline>
                means the fees and charges that are incurred under this
                Agreement.
              </PInline>
            </TextBlock>

            <TextBlock>
              <PInline>(e) </PInline>
              <PBold>“Diminished Value” </PBold>
              <PInline>
                means the difference between the fair market value of the
                Vehicle before damage or loss and its value after repairs as
                calculated by a third-party estimate obtained by us or on our
                behalf.
              </PInline>
            </TextBlock>

            <TextBlock>
              <PInline>(f) </PInline>
              <PBold>“Includes” </PBold>
              <PInline>or </PInline>
              <PBold>“Including” </PBold>
              <PInline>
                means ”including (or includes), but not limited to," ”including
                (or includes) without lim-itation," and similar constructions.
              </PInline>
            </TextBlock>

            <TextBlock>
              <PInline>(g) </PInline>
              <PBold>“Loss of Use” </PBold>
              <PInline>
                means the loss of our ability to use a Vehicle for our purposes
                because of Vehicle damage or loss during a Rental Period,
                including use for rent, display for rent and/or sale,
                opportunity to upgrade or sell, or transportation of employees.
              </PInline>
            </TextBlock>

            <TextBlock>
              <PInline>(h) </PInline>
              <PBold>“Optional Equipment” </PBold>
              <PInline>
                means optional accessories and equipment that we may offer for
                rent at an additional charge, including child safety seats,
                navigational systems, mobile devices, and ski racks.
              </PInline>
            </TextBlock>

            <TextBlock>
              <PInline>(i) </PInline>
              <PBold>“Rental Period” </PBold>
              <PInline>
                means the period between the date and time that you take
                possession of a Vehicle and the date and time that the Vehicle
                is either returned to or recovered by us and checked in by us.
              </PInline>
            </TextBlock>

            <TextBlock>
              <PInline>(j) </PInline>
              <PBold>“Toll” </PBold>
              <PInline>
                means a toll charge assessed by a charging authority for use of
                a toll lane.
              </PInline>
            </TextBlock>

            <TextBlock>
              <PInline>(k) </PInline>
              <PBold>“Vehicle” </PBold>
              <PInline>
                means the motor vehicle that you rent from Go Rentals and any
                vehicle we substitute for it, all its tires, tools, accessories,
                equipment, keys and Vehicle documents.
              </PInline>
            </TextBlock>

            <TextBlock>
              <PInline>(l) </PInline>
              <PBold>“Vehicle License Cost Recovery Fee” </PBold>
              <PInline>
                means a vehicle license cost recovery fee based on our estimated
                average per day per vehicle portion of our total annual vehicle
                licensing, titling, and registration costs or as otherwise
                defined under Colorado law.
              </PInline>
            </TextBlock>

            <TextBlock>
              <PInline>(m) </PInline>
              <PBold>“Violation” </PBold>
              <PInline>
                means a parking citation, photo enforcement fee, a fine for toll
                evasion, and other fines, fees, and penal-ties, including
                storage liens and charges.
              </PInline>
            </TextBlock>

            <TextBlock>
              <PInline>(n) </PInline>
              <PBold>“You” </PBold>
              <PInline>or </PInline>
              <PBold>“your” </PBold>
              <PInline>
                means the person identified as the renter in this Agreement,
                each person signing this Agreement, each Authorized Driver, and
                every person to whom charges are billed by us at your direction.
                All persons referred to as ”you" or ”your" are “jointly and
                severally bound by this Agreement.
              </PInline>
            </TextBlock>

            <TextBlock>
              <PInline>(o) </PInline>
              <PBold>“We”, “our” </PBold>
              <PInline>or </PInline>
              <PBold>"us" </PBold>
              <PInline>means Go Rentals.</PInline>
            </TextBlock>
          </TextBlock>

          {/* 3. */}
          <TextBlock>
            <PInline>3. </PInline>
            <PBold>RENTAL, INDEMNITY; OPTIONAL EQUIPMENT; NO WARRANTIES.</PBold>
          </TextBlock>
          <TextBlock>
            <PInline>
              (a) Your use of the Vehicle is a contract for rental of that
              Vehicle and is a transfer of possession and use only. You may not
              transfer or assign your rights in this Agreement or your right to
              use the Vehicle. You represent that you have a valid, unexpired
              driver's license and will inform us of any changes during the
              Rental Period.,
            </PInline>
          </TextBlock>
          <TextBlock>
            <PInline>
              (b) We may offer to rent certain Optional Equipment for an
              additional charge. Optional Equipment is subject to availabil-ity,
              is rented without warranty in AS IS condition WITH ALL FAULTS, and
              must be returned at the end of the Rental Period in the same
              condition as when rented. Optional Equipment must be inspected and
              installed by you, and you must follow manufacturer instructions
              for all Optional Equipment.,
            </PInline>
          </TextBlock>
          <TextBlock>
            <PInline>(c) To the fullest extent permitted by law:</PInline>
          </TextBlock>
          <TextBlock>
            <PInline>
              i. We may repossess the Vehicle at your expense without notice to
              you if the Vehicle is abandoned or used in violation of law or
              this Agreement;
            </PInline>
          </TextBlock>
          <TextBlock>
            <PInline>
              ii. You agree to indemnify, defend, and hold harmless Go Rentals
              and our parents, subsidiaries, affiliates, members, of-ficers,
              directors, employees, and agents from all claims, liability, costs
              and attorney fees resulting from, in connection with, or arising
              out of: (A) this rental; (B) your use and/or possession of the
              Vehicle; and/or (C) your use and/or possession of Optional
              Equipment.
            </PInline>
          </TextBlock>
          <TextBlock>
            <PBold>
              iii. WE MAKE NO WARRANTIES, WHETHER EXPRESS, IMPLIED OR APPARENT,
              REGARDING THE VEHICLE OR OPTIONAL EQUIPMENT, INCLUDING ANY
              WARRANTY OF MERCHANTABILITY OR ANY WARRANTY THAT THE VEHICLE OR
              OPTIONAL EQUIPMENT IS FIT FOR A PARTICULAR PURPOSE.
            </PBold>
          </TextBlock>

          {/* 4. */}
          <TextBlock>
            <PInline>4. </PInline>
            <PBoldUnderline>CONDITION/RETURN OF VEHICLE.</PBoldUnderline>
          </TextBlock>
          <TextBlock>
            <PInline>
              (a) You agree that you are renting the Vehicle ”As Is," and that
              you have an opportunity to inspect it before leaving the premises.
              You must return the Vehicle to the rental office where you picked
              it up or to another location that we identify, on the date and
              time specified (or sooner upon our oral or written demand), and in
              the same condition that you received it, except for ordinary wear.
            </PInline>
          </TextBlock>
          <TextBlock>
            <PInline>
              (b) To extend a rental you must contact our rental office before
              the due-in date.
            </PInline>
          </TextBlock>
          <TextBlock>
            <PInline>
              (c) If a Vehicle is returned after closing hours, you remain
              responsible for the safety of and damage to it until we inspect it
              upon our next opening for business. All Charges may continue to
              accrue until the return location opens for business.
            </PInline>
          </TextBlock>
          <TextBlock>
            <PInline>
              (d) Service to a Vehicle or replacement of parts or accessories
              during a rental must have our prior approval. You must return a
              Vehicle with at least the same amount of fuel as when rented,
              unless you purchase a pre-paid fuel option.
            </PInline>
          </TextBlock>
          <TextBlock>
            <PInline>(e) </PInline>
            <PBold>
              If the Vehicle is not returned on the date and time indicated on
              this Agreement, we reserve the right to report the Vehicle stolen
              to the appropriate authorities in accordance with applicable law.
            </PBold>
          </TextBlock>

          {/* 5. */}
          <TextBlock>
            <PInline>5. </PInline>
            <PBold>RESPONSIBILITY FOR DAMAGE OR LOSS.</PBold>
          </TextBlock>
          <TextBlock>
            <PInline>
              You must report all accidents or incidents of theft or vandalism
              to us and the police as soon as you discover them. You are
              responsible for all damage to or loss or theft of the Vehicle
              during the Rental Period, regardless of fault, resulting from any
              cause, including damage caused by collisions, weather, vandalism,
              theft, road conditions and acts of nature. Your responsibility
              will include:{" "}
            </PInline>
            <PBold>(a) </PBold>
            <PInline>
              all physical damage to the Vehicle measured as follows: (i) if we
              determine that the Vehicle is a total loss, the fair market value
              of the Vehicle, less salvage; (ii) if we determine that the
              Vehicle is repairable: (A) the difference between the value of the
              Vehicle immediately before the damage and the value immediately
              after the damage; or (B) the reasonable estimated retail value or
              actual cost of repair plus Diminished Value;{" "}
            </PInline>
            <PBold>(b) </PBold>
            <PInline>
              Loss of Use, measured by multiplying your daily rental rate either
              by the actual or estimated number of days from the date the
              Vehicle is damaged until it is replaced or repaired, which you
              agree represents a reasonable estimate of Loss of Use damages and
              not a penalty{" "}
            </PInline>
            <PBold>
              (Loss of Use is payable regardless of fleet utilization); (c){" "}
            </PBold>
            <PInline>
              a reasonable administrative fee; (d) towing, storage, and impound
              charges and other reasonable incidental and consequential damages;
              and (e) all costs associated with our enforcement of this
              Agreement.
            </PInline>
          </TextBlock>

          {/* 6. */}
          <TextBlock>
            <PBold>6. </PBold>
            <PBoldUnderline>ROADSIDE ASSISTANCE. </PBoldUnderline>
            <PBold>
              For roadside assistance, contact the number on your Rental
              Agreement Face Page.
            </PBold>
          </TextBlock>
          <TextBlock>
            <PInline>
              Charges apply for any roadside assistance services provided to
              you.
            </PInline>
          </TextBlock>

          {/* 7. */}
          <TextBlock>
            <PBold>7. </PBold>
            <PBoldUnderline>PROHIBITED USES. </PBoldUnderline>
            <PBold>
              The following uses of the Vehicle are prohibited and are material
              breaches of this Agreement (“Prohibited Uses”).{" "}
            </PBold>
            <PInline>The Vehicle may not be used: </PInline>
          </TextBlock>
          <TextBlock>
            <PBold>
              (a) by anyone who is not an Authorized Driver, or by anyone whose
              driving license is suspended;
            </PBold>
          </TextBlock>
          <TextBlock>
            <PBold>
              (b) by anyone under the in6uence of alcohol or a controlled
              substance;
            </PBold>
          </TextBlock>
          <TextBlock>
            <PBold>
              (c) by anyone who obtained the Vehicle or extended the rental by
              giving us false, fraudulent or misleading infor-mation; (d) in
              furtherance of any illegal purpose or under any circumstance that
              would constitute a felony or other violation of law (other than a
              minor traffic violation);
            </PBold>
          </TextBlock>
          <TextBlock>
            <PBold>
              (e) to carry persons or property for hire, including use of the
              Vehicle as a taxi, limousine, “black car,” transportation network
              company vehicle, delivery services, or for similar commercial use;
            </PBold>
          </TextBlock>
          <TextBlock>
            <PBold>
              (f) to transport groups, such as church groups, scout troops, or
              athletic teams;
            </PBold>
          </TextBlock>
          <TextBlock>
            <PBold>(g) to push or tow anything;</PBold>
          </TextBlock>
          <TextBlock>
            <PBold>(h) in any race, speed test or contest;</PBold>
          </TextBlock>
          <TextBlock>
            <PBold>(i) to teach anyone to drive;</PBold>
          </TextBlock>
          <TextBlock>
            <PBold>
              (j) to carry dangerous or hazardous items or illegal materiel;,
            </PBold>
          </TextBlock>
          <TextBlock>
            <PBold>(k) outside the United States or Canada;</PBold>
          </TextBlock>
          <TextBlock>
            <PBold>(l) on unpaved roads;</PBold>
          </TextBlock>
          <TextBlock>
            <PBold>
              (m) to transport more persons than the Vehicle has seat belts, or
              to carry persons outside the passenger compart-ment;,
            </PBold>
          </TextBlock>
          <TextBlock>
            <PBold>
              (n) to transport children without approved child safety seats as
              required by law;
            </PBold>
          </TextBlock>
          <TextBlock>
            <PBold>
              (o) when the odometer has been tampered with or disconnected;
            </PBold>
          </TextBlock>
          <TextBlock>
            <PBold>
              (p) when it is reasonable for you to know that further operation
              would damage the Vehicle;
            </PBold>
          </TextBlock>
          <TextBlock>
            <PBold>
              (q) with inadequately secured cargo; (r) if applicable, by anyone
              who lacks experience operating a manual trans-mission;
            </PBold>
          </TextBlock>
          <TextBlock>
            <PBold>
              (s) in connection with a willful, wanton or reckless act; (t) by
              anyone who is smoking or vaping any substance in the Vehicle; or,
            </PBold>
          </TextBlock>
          <TextBlock>
            <PBold>
              (u) by anyone who is driving or operating the Vehicle while
              operating hand-held devices (including cell phones, mobile
              computers, or other devices that are capable of receiving or
              transmitting telephonic communications, elec-tronic data, email or
              text messages) while not in a hands-free mode or otherwise in
              compliance with applicable laws and regulations relating to use of
              electronic devices while driving. Failure to cooperate with us or
              our assignee/de-signee in the investigation of a damage incident
              or claim may invalidate optional protection that you purchase.
            </PBold>
          </TextBlock>
          <TextBlock>
            <PInline>
              PROHIBITED USE OF THE VEHICLE VIOLATES THIS AGREEMENT AND MAY VOID
              ALL LIABILITY AND OTHER INSURANCE COVER-AGE (TO THE FULLEST EXTENT
              PERMITTED BY LAW).
            </PInline>
          </TextBlock>

          {/* 8. */}
          <TextBlock>
            <PBold>8. </PBold>
            <PBoldUnderline>COLLISION DAMAGE WAIVER. </PBoldUnderline>
          </TextBlock>
          <TextBlock>
            <PInline>
              (a) If we offer, and you purchase, CDW, we waive our right to hold
              you financially responsible for damage to or loss of the Vehicle.{" "}
            </PInline>
            <PBold>
              Your CDW will be invalidated, and we will not waive our right to
              hold you financially responsible for loss of or damage to the
              Vehicle if (a) you gave us false information with the intent to
              defraud us, (b) the speedometer or odometer is tampered with or
              disconnected during the Rental Period, or (c) damage to the
              Vehicle is caused: (i) by your willful and wanton conduct or
              misconduct; (ii) when the Vehicle is operated by an Authorized
              Driver who is intoxicated by alcohol or a controlled substance as
              defined in C.R.S. N 42-4-1301; (iii) by or during participation in
              a speed contest; (iv) when carrying persons or property for hire,
              or when pushing or towing anything; (v) when using the Vehicle
              while committing a misdemeanor, felony or other criminal act; (vi)
              when operated outside the continental United States, unless
              specifically authorized elsewhere in this Agreement; or (vii) when
              the Vehicle is used by a person who is not an Authorized Driver.
              Notwithstanding the purchase or other availability of CDW or any
              other coverage that you may have, you agree to cooperate with us
              or our assignees in the investigation of any damage incident or
              claim of any size. Failure to do so is prohibited and constitutes
              a material breach of this Agreement{" "}
            </PBold>
          </TextBlock>
          <TextBlock>
            <PBold>
              (b) CDW is not insurance, is optional, and may duplicate coverage
              under your own insurance policy or credit card. You may wish to
              check with your insurance representative or credit card company to
              determine whether you have coverage or protection for damage or
              loss of the Vehicle. CDW does not apply to keys, key fobs,
              transponders or Optional Equipment that we rent to you for use in
              the Vehicle.
            </PBold>
          </TextBlock>
          <TextBlock>
            <PBold>
              (c) You may accept CDW by selecting CDW when you reserve a Vehicle
              or at the time you pick up a vehicle. You agree to pay the per-day
              CDW charge in effect at the time of rental for each full or
              partial day for each rental for which you have selected CDW.
            </PBold>
          </TextBlock>

          {/* 9. */}
          <TextBlock>
            <PBold>9. </PBold>
            <PBoldUnderline>
              RESPONSIBILITY TO OTHERS; INSURANCE.{" "}
            </PBoldUnderline>
            <PInline>
              You are responsible for all damage or loss caused to others and
              their prop-erty. You agree to maintain automobile insurance during
              the term of each rental which provides to us, and to you, the
              following primary coverage: (a) Bodily injury{" "}
            </PInline>
            <PBold>(“BI”) </PBold>
            <PInline>and property damage</PInline>
            <PBold>(“PD”) </PBold>
            <PInline>
              liability coverage; (b) Personal injury protection
            </PInline>
            <PBold>(“PIP”)</PBold>
            <PInline>
              , no-fault, or similar coverage where required; (c)
              Uninsured/underinsured (“UM/UIM”) coverage where required, and (d)
              Comprehensive and collision damage coverage extending to the
              Vehicle. Your insurance coverage must provide at least the minimum
              limits of coverage required by the financial responsibility laws
              of the state where the loss occurs.{" "}
            </PInline>
            <PBold>
              To the extent permitted by law, by signing this Agreement, you
              reject UM, UIM, and supplemental no-fault or PIP coverages. If we
              are required to provide such coverage, you select the minimum
              limits required by law.{" "}
            </PBold>
            <PInline>
              In states where the law requires us to provide insurance, your
              insurance will be primary. Any insurance we are required to
              provide applies only to claims of accidental BI and PD resulting
              from the use of the Vehicle, and is excess to any other valid and
              collectible insurance whether primary, secondary, excess or
              contingent. Our insurance policy contains exclusions, conditions,
              and limitations applicable to anyone claiming coverage. You agree
              to cooperate with our insurer if any claim is made, and give us
              immediate notice of dam-age, claim, or lawsuit against you.
              Engaging in a Prohibited Use described in Paragraph 7 of this
              Agreement or any other material breach of this Agreement may void
              any insurance coverage.{" "}
            </PInline>
            <PBold>
              The Vehicle may not be taken to Mexico under any circumstances.
            </PBold>
          </TextBlock>

          {/* 10. */}
          <TextBlock>
            <PInline>10. </PInline>
            <PBoldUnderline>RESERVE; CHARGES. </PBoldUnderline>
            <PBold>
              You permit us to reserve against your payment card at the time of
              rental a reasonable amount in addition to the estimated total
              charges. We may use the reserve to pay all Charges. We will
              authorize the release of an excess reserve at completion of your
              rental. Your payment card issuer's rules will apply to crediting
              your account for any excess, which may not be immediately released
              by your card issuer.{" "}
            </PBold>
            <PInline>
              You will pay us at or before conclusion of each rental, or on
              demand, all Charges, including: (a) time & mileage charge for the
              Rental Period, including an additional mileage fee if you exceed
              the daily mileage allowance for the vehicle class rented as noted
              on the Face Page. Daily rates are based on a 24-hour day. Any
              fraction of a day will be charged at the hourly rate, but will not
              exceed the daily rate; (b) a mileage charge based on our
              experience and records if the odometer is tampered with or
              disconnected; (c) fees for optional products, equipment, and
              services you purchased& (d) fuel and a refueling fee if you return
              the Vehicle with less fuel than when rented; (e) Additional
              Mandatory Charges; (f) expenses we incur locating and recovering
              the Vehicle if you fail to return it or if we repossess it under
              the terms of this Agreement; (g) all costs we incur enforcing or
              defending our rights under this Agreement; (h) a reasonable fee to
              clean the Vehicle if returned substantially less clean than when
              rented or if the Vehicle is returned containing evidence of
              smoking; (i) a lost key fee if you lose the keys or key fob to the
              Vehicle; (“) a surcharge if you return the Vehicle to a location
              other than the location where you rented the Vehicle or if you do
              not return it on the date and time due; (k) towing, storage
              charges, forfeitures, court costs, penalties and all other costs
              we incur from your use of the Vehicle; (l) replacement cost of
              lost or damaged parts and supplies used in Optional Equipment; and
              (m) a Government Administrative Rate Supplement (GARS) of $5 per
              day (if applicable){" "}
              <PBold>
                If you use a credit card or other payment card issued by a bank
                or financial institution outside of the United States, we will
                charge your credit card in US dollars. Any currency conversion
                will be handled by the issuing bank and any conversion charges
                by the issuing bank shall be your responsibility. All Charges
                are subject to our final audit. If errors are discovered after
                the close of this transaction, you authorize us to correct the
                Charges with the payment card issuer.
              </PBold>
            </PInline>
          </TextBlock>

          {/* 11. */}
          <TextBlock>
            <TextBlock>
              <PBold>11. </PBold>
              <PBoldUnderline>
                LIABILITY FOR TOLLS, VIOLATIONS, AND OTHER CHARGES; DISCLAIMER
                OF LIABILITY.{" "}
              </PBoldUnderline>
              <PInline>
                You are liable for all Tolls and Violations assessed against
                you, us, or the Vehicle during the Rental Period.
              </PInline>
            </TextBlock>
            <TextBlock>
              <PInline>(A) </PInline>
              <PBold>Tolls. </PBold>
              <PInline>
                The Vehicle may be enrolled in an electronic toll collection
                service to pay for Tolls electronically. If you use any toll
                facility, including a cashless toll road, tunnel, or bridge, and
                do not have your own electronic device or pass that is accepted
                by the relevant toll authority or make other payment
                arrangements, you agree that we (or a third-party processor
                <PBold>(“Processor”) </PBold>
                may, in our discretion and without prior notification to you,
                pay the Toll plus applicable taxes and fees on your behalf
                directly to the charging authority. You authorize us or the
                Processor to charge any payment card of yours on file without
                notice for all Tolls assessed against the Vehicle during the
                rental at the highest undiscounted rate (whichever is higher)
                plus: any fines or fees assessed by the toll authority; and an
                administrative fee of up to $50 per Toll.{" "}
                <PBold>
                  Certain toll roads do not accept cash. To avoid toll
                  violations and associated fines, fees, and taxes (and our or a
                  Processor's administrative fees), you must pay all Tolls with
                  a personal transponder that is accepted on the road; use only
                  cash lanes and pay cash; plan a route to avoid Tolls; or
                  consult local authorities for other payment methods.
                </PBold>
              </PInline>
            </TextBlock>
            <TextBlock>
              <PInline>(B) </PInline>
              <PBold>Violations. </PBold>
              <PInline>
                You are responsible to pay for all Violations. If we are
                notified that we may be responsible for a Violation, you agree
                that we or a Processor may in our discretion and without prior
                notification to you, pay the Violation plus applicable taxes and
                fees on your behalf directly to the charging authority, and you
                authorize us or the Processor to charge any payment card of
                yours on file our administrative fee of up to $50 for each
                ”Violation" plus the amount charged by the ”Violation"
                authority.
              </PInline>
            </TextBlock>
            <TextBlock>
              <PInline>(C) </PInline>
              <PBold>General. </PBold>
              <PInline>
                If we or a Processor pay a Toll and/or Violation on your behalf,
                you understand that you may not be able to challenge the
                validity of the Toll or Violation, and you authorize us to
                release your rental information to the charging authorities.
                Payments for Tolls and Violations may not be processed until
                several weeks after conclusion of your rental. You authorize us
                to release your rental information, including personally
                identifiable information, to government officials and other
                authorities charged with enforcing Tolls and Violations. If we
                or a Processor pay a Toll or Violation assessed on the Vehicle
                during the Rental Period, you authorize us or the Processor to
                charge all payments and administrative fees to the payment card
                you used to pay for the rental. You authorize us or a Processor
                to contact you directly or to send invoices regarding any tolls,
                citations, fines, or penalties incurred by you or assessed
                against us to our Vehicle while the Vehicle was rented by you.
                We disclaim all liability arising from any error by a tolling or
                charging authority.
              </PInline>
            </TextBlock>
          </TextBlock>

          {/* 12. */}
          <TextBlock>
            <TextBlock>
              <PBold>12. </PBold>
              <PBoldUnderline>RENTAL OF ELECTRIC VEHICLES. </PBoldUnderline>
              <PInline>
                The terms in this Paragraph 12 apply to the rental of an
                electric vehicle (”EV") from Go Rentals. An EV is defined as a
                vehicle that exclusively uses battery power rather than gasoline
                or diesel fuel.{" "}
              </PInline>
            </TextBlock>
            <TextBlock>
              <PInline>
                (a) Battery-powered electric vehicles (EVs) use battery power
                rather than gasoline. For your safety, as well as for the
                mechanical condition of our EV, we strongly recommend that you
                charge the battery as often as possible, and keep it between a
                15x-80x charge level. If the battery charge level falls below
                15x, it can cause battery damage, restricted entry to the EV,
                and may significantly reduce battery life. If we are unable to
                enter the vehicle, and/or the battery charge level is below 15x,
                the vehicle will be towed to the nearest EV deal-ership. You
                will be responsible for paying towing fees, repair fees, idle
                time, and any other fees incurred as a result of battery damage,
                all of which will be added to your final invoice.
              </PInline>
            </TextBlock>
            <TextBlock>
              <PInline>
                (b) The battery charge level will be recorded at the time of
                pickup. Please return the vehicle at the same level or higher.
                If the EV is returned with a lower charge level, you will be
                assessed a battery charge fee as follows: (1) $25 if the return
                charge level is 50x to 75x; (2) $50 if the return charge level
                is 25x to 50x; and (3) $100 if the return charge level is less
                than 25x. The battery charge fee is in addition to any idle time
                fees billed to Go Rentals, or fees related to charging station
                damages caused by your negligence.
              </PInline>
            </TextBlock>
            <TextBlock>
              <PInline>
                (c) Key cards, key fobs and charging equipment are provided at
                the time of pick-up of the EV. Lost or damaged key cards will
                incur a fee of $200, lost key fobs will incur a fee of $400, and
                lost charging equipment will incur a fee of $800.
              </PInline>
            </TextBlock>
          </TextBlock>

          {/* 13. */}
          <TextBlock>
            <PBold>13. </PBold>
            <PBoldUnderline>PERSONAL INFORMATION. </PBoldUnderline>
            <PInline>
              You agree that we may disclose personally identifiable information
              about you to our affili-ates and other third parties in connection
              with our enforcement of our rights under this Agreement and other
              legitimate business functions. For a copy of the Go Rentals
              Privacy Policy, see https://www.gorentals.com/privacy/.
            </PInline>
          </TextBlock>

          {/* 14. */}
          <TextBlock>
            <PInline>14. </PInline>
            <PBoldUnderline>
              COLLECTION AND USE OF VEHICLE DATA.{" "}
            </PBoldUnderline>
            <PInline>
              Vehicles may be equipped with global positioning satellite (GPS)
              technology or another telematics system, and/or an event data
              recorder (EDR) that collects and transmits data from the Vehicle.{" "}
            </PInline>
            <PBold>
              You acknowledge and authorize that your use of this Vehicle may be
              remotely monitored by us or on behalf of us through such systems
              to the fullest extent permitted by law. This remote monitoring may
              include collection of Vehicle data, such as: location, odometer,
              oil life, fuel level, tire pressure, battery state of charge,
              diagnostic trouble codes, and other elements that we may deem
              necessary (and to the fullest extent permitted by applicable law).{" "}
            </PBold>
            <PInline>
              Once collected, the Vehicle data may be combined with other
              information that you have provided to us and used to generate
              safety, performance, and other similar information so that we can
              deliver better services. Our use of the information collected from
              the Vehicle may include sharing the data with third parties (such
              as our service providers), as well as storage of this information
              after the expiration of your rental agreement. The renter agrees
              to inform all drivers and passengers of the Vehicle of the terms
              of this Paragraph 14, and that you have authorized release of
              information collected by GPS or other telematics system or EDR.{" "}
            </PInline>
            <PBold>
              If you download a mobile application made available by the vehicle
              manufacturer and you register the Vehicle in that application,
              your use of the application may result in the sharing of your
              personal data, vehicle information, location information and
              driving characteristics with the vehicle manufacturer. Your use of
              vehicle manufacturer applications is strictly governed by the
              vehicle manufacturer’s terms and conditions and privacy policy,
              and we are not in any way responsible for, and you release us
              from, any claim or cause of action that may arise from your use of
              these applications. Before returning the Vehicle, it is your
              responsibility to either remove the application or delete the
              Vehicle from the application. In addition, the Vehicle may be
              equipped with devices that permit you to pair your own mobile
              devices, and which may download your personal contacts,
              communications, location or other digital data. You should delete
              all personal information from the Vehicle's systems before return-
              ing it. We are not responsible for the operability of any
              telematics navigational or other system included with the Vehicle.
              To the fullest extent permitted by law,{" "}
            </PBold>
            <PInline>
              you agree to release and to indemnify, defend and hold us and our
              parents, subsidiaries, affiliates, members, officers, directors,
              employees, and agents harmless from any damage to persons or
              property caused by failure of the GPS or other telematics system
              or EDR to operate properly, or otherwise arising from the use of
              the GPS or other telematics system or EDR.
            </PInline>
          </TextBlock>

          {/* 15. */}
          <TextBlock>
            <PInline>15. </PInline>
            <PBoldUnderline>PERSONAL PROPERTY. </PBoldUnderline>
            <PInline>
              You agree that: (a) we are not responsible for damage to, loss of
              or theft of personal property of yours or another person that it
              received, handled or stored, or that was left or carried in or on
              the Vehicle or in any service vehicle or in our offices, whether
              the damage, loss, or theft was caused by our negligence or
              otherwise; (b) to the fullest extent permitted by law, you will
              defend, indemnify and hold us and our affiliates harmless from all
              losses, liabilities, damages, injuries, claims, demands, costs,
              attorney fees and other expenses arising out of you or your
              passengers' failure to remove any personal property; and (c) we
              are not responsible for any claim or cause of action which may
              arise from a prior renter's or passenger's failure to remove any
              personal property, data or records from the Vehicle.
            </PInline>
          </TextBlock>

          {/* 16. */}
          <TextBlock>
            <TextBlock>
              <PBold>16. </PBold>
              <PBoldUnderline>
                ELECTRONIC COMMUNICATIONS AND CONSENT; TRANSACTIONAL EMAILS AND
                TEXTS.
              </PBoldUnderline>
            </TextBlock>
            <TextBlock>
              <PInline>(a) </PInline>
              <PBold>Electronic Communications, Generally. </PBold>
              <PInline>
                To the fullest extent permitted by law, we may provide this
                Agreement and any notices or other communications (including by
                e-mail) regarding this Agreement, your reservation, or the
                rental of the Vehicle{" "}
              </PInline>
              <PBold>(“Communications”) </PBold>
              <PInline>
                to you electronically, and you agree to receive Communications
                from us in an electronic form. We may deliver Electronic
                Communications to the email address that you provide to us when
                entering into this Agreement or otherwise. All Communications in
                either electronic or paper format will be considered to be in
                ”writing." All Communications will be considered to have been
                received no later than five (5) business days after
                dissemination, whether or not you have received or retrieved the
                Communications. Although we reserve the right to provide
                Commu-nications in paper format to you at the postal address you
                provide to us, you expressly agree that any notice or other
                Communications due under this Agreement may be given in email
                form to the email address that you provide to us. Your consent
                to receive Communications electronically is valid until you
                revoke your consent.
              </PInline>
            </TextBlock>
            <TextBlock>
              <PInline>(b) </PInline>
              <PBold>Texting & Calling. </PBold>
              <PInline>
                you consent to us and/or our representatives contacting you at
                the phone number(s) provided in connection with this Agreement
                for the purpose of delivering informational or transactional
                outreach, including customer surveys, via live, pre-recorded, or
                autodialed calls or texts. Your consent to receiving these calls
                or texts are not a condition of this Agreement or any other
                agreement with us. For questions about privacy, please see
                Paragraph 13 of this Agreement.
              </PInline>
            </TextBlock>
          </TextBlock>

          {/* 17. */}
          <TextBlock>
            <PBold>17. </PBold>
            <PBoldUnderline>U.S. GOVERNMENT RENTALS. </PBoldUnderline>
            <PInline>
              Rentals that are subject to the U.S. Government Rental Agreement
              administered by the Defense Travel Management Office will be
              governed by the provisions of the U.S. Government Rental
              Agreement, including payment of the Government Administrative Rate
              Supplement charge noted on the Face Page.
            </PInline>
          </TextBlock>

          {/* 18. */}
          <TextBlock>
            <PBold>18. </PBold>
            <PBoldUnderline>MISCELLANEOUS. </PBoldUnderline>
            <PInline>
              This Agreement constitutes the entire agreement between you and
              us. All prior representations and agreements, whether written or
              oral, between you and us regarding this rental are void. No term
              of this Agreement can be waived or modified except by a writing
              signed by us. A waiver by us of any breach of this Agreement is
              not a waiver of any additional breach or waiver of the performance
              of your obligations under this Agreement. Our acceptance of
              payment from you or our failure, refusal or neglect to exercise
              any of our rights under this Agreement does not constitute a
              waiver of any other provision of this Agreement.{" "}
            </PInline>
            <PBold>
              To the fullest extent permitted by law, you: (a) release us from
              any liability for consequential, special or punitive damages in
              connection with the rental or reservation of the Vehicle; and (b)
              waive all recourse against us for any criminal reports or
              prosecutions that we make against you that arise out of your
              breach of this Agreement.{" "}
            </PBold>
            <PInline>
              Unless otherwise provided, any reference to a statute or
              regulation will be deemed to be a reference to that statute or
              regulation as amended from time to time or to a newly adopted
              statute or regulation replacing a repealed statute or regulation.
              If any provision of this Agreement is deemed void or
              unenforceable, the re-maining provisions are valid and
              enforceable.
            </PInline>
          </TextBlock>

          {/* Last */}
          <TextBlock style={{ marginTop: "10pt" }}>
            <PInline>
              By signing below, you certify that: (1) you hold a valid and
              unexpired driver's license& and (2) you had the opportunity to
              read, and that you agree to, these Rental Agreement Terms and
              Conditions; and (3) you agree to our collection and use of vehicle
              data and texting and calling terms as described in Paragraphs 14
              and 16 of the Agreement.
            </PInline>
          </TextBlock>
        </div>
      }
    />
  </ContractDocumentWrapper>
));

export default ContractTemplate;
