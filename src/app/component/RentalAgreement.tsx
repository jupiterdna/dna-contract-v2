"use client";

import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { docStyles } from "../styles";
import SignatureComponent from "./SignatureComponent";
import HeaderView from "./HeaderView";

type RentalAgreementProps = {
  title: string;
};

const RentalAgreement = ({ title }: RentalAgreementProps) => {
  const spaces = (num: number) => {
    return <Text style={{ color: "transparent" }}>{"_".repeat(num)}</Text>;
  };

  return (
    <View>
      <HeaderView title={title} />
      <View>
        <View style={style.textcontainer}>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(3)} 1.{" "}
              <Text style={style.underline}>AGREEMENT AND PARTIES.</Text>{" "}
            </Text>
            <Text style={style.text}>
              {" "}
              These Rental Agreement Terms and Conditions, the Rental Agreement
              Face Page signed by you, and any other documents which you are
              required to sign to rent the vehicle together constitute the
              rental agreement (the “Agreement”) between you (the renter) and
              Gitibin & Associates, Inc., a California corporation doing
              business as “Go Rentals”
            </Text>
          </Text>
        </View>
        <View style={style.textcontainer}>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(3)} 2. <Text style={style.underline}>DEFINITIONS.</Text>{" "}
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)} <Text style={style.text}>(a)</Text>{" "}
              <Text>“Authorized Driver”</Text>{" "}
              <Text style={style.text}>
                means a driver authorized to use the Vehicle. Except where
                otherwise specifically authorized by applicable motor vehicle
                rental law, only the renter and an additional driver listed by
                us on your Rental Agreement Face Page at the time of rental are
                authorized to drive the Vehicle. Except as otherwise required by
                applicable law, each Authorized Driver must have a valid
                driver’s license and be at least age 25.
              </Text>
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)} <Text style={style.text}>(b)</Text> <Text>“CDW”</Text>{" "}
              <Text style={style.text}>means Collision Damage Waiver.</Text>
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)} <Text style={style.text}>(c)</Text>{" "}
              <Text>“Charges”</Text>{" "}
              <Text style={style.text}>
                means the fees and charges that are incurred under this
                Agreement.
              </Text>
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)} <Text style={style.text}>(d)</Text>{" "}
              <Text>“Diminished Value”</Text>{" "}
              <Text style={style.text}>
                means the difference between the fair market value of the
                Vehicle before damage or loss and its value after repairs as
                calculated by a third-party estimate obtained by us or on our
                behalf.
              </Text>
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)} <Text style={style.text}>(e)</Text>{" "}
              <Text>“Includes” or “Including”</Text>{" "}
              <Text style={style.text}>
                means “including (or includes), but not limited to,” “including
                (or includes) without limitation,” and similar constructions.
              </Text>
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)} <Text style={style.text}>(f)</Text>{" "}
              <Text>“Loss of Use”</Text>{" "}
              <Text style={style.text}>
                means the loss of our ability to use a Vehicle for our purposes
                because of Vehicle damage or loss during a Rental Period,
                including use for rent, display for rent and/or sale,
                opportunity to upgrade or sell, or transportation of employees.
              </Text>
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)} <Text style={style.text}>(g)</Text>{" "}
              <Text>“Optional Equipment”</Text>{" "}
              <Text style={style.text}>
                means optional accessories and equipment that we may offer for
                rent at an additional charge, including child safety seats,
                navigational systems, mobile devices, and ski racks.
              </Text>
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)} <Text style={style.text}>(h)</Text>{" "}
              <Text>“Rental Period”</Text>{" "}
              <Text style={style.text}>
                means the period between the date and time that you take
                possession of a Vehicle and the date and time that the Vehicle
                is either returned to or recovered by us and checked in by us.
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)} <Text style={style.text}>(i)</Text>{" "}
              <Text>“Toll”</Text>{" "}
              <Text style={style.text}>
                means a toll charge assessed by a charging authority for use of
                a toll lane.
              </Text>
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)} <Text style={style.text}>(j)</Text>{" "}
              <Text>“Vehicle”</Text>{" "}
              <Text style={style.text}>
                means the motor vehicle that you rent from Go Rentals and any
                vehicle we substitute for it, all its tires, tools, accessories,
                equipment, keys and Vehicle documents.
              </Text>
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)} <Text style={style.text}>(k)</Text>{" "}
              <Text>“Vehicle License Cost Recovery Fee”</Text>{" "}
              <Text style={style.text}>
                means a vehicle license cost recovery fee based on our estimated
                average per day per vehicle portion of our total annual vehicle
                licensing, titling, and registration costs or as otherwise
                defined under applicable law.
              </Text>
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)} <Text style={style.text}>(l)</Text>{" "}
              <Text>“Violation”</Text>{" "}
              <Text style={style.text}>
                means a parking citation, photo enforcement fee, a fine for toll
                evasion, and other fines, fees, and penalties, including storage
                liens and charges.
              </Text>
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)} <Text style={style.text}>(m)</Text>{" "}
              <Text>“You” or “your”</Text>{" "}
              <Text style={style.text}>
                means the person identified as the renter in this Agreement,
                each person signing this Agreement, each Authorized Driver, and
                every person to whom charges are billed by us at your direction.
                All persons referred to as “you” or “your” are jointly and
                severally bound by this Agreement.
              </Text>
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)} <Text style={style.text}>(n)</Text>{" "}
              <Text>“We“, “our“ or “us“</Text>{" "}
              <Text style={style.text}>means Go Rentals.</Text>
            </Text>
          </Text>
        </View>
        {/* 3 */}
        <View style={style.textcontainer}>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(3)} 3.{" "}
              <Text style={style.underline}>
                RENTAL, INDEMNITY; OPTIONAL EQUIPMENT; NO WARRANTIES.
              </Text>{" "}
            </Text>
          </Text>
        </View>
        <View style={style.textcontainer}>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textNormal}>
                (a) Your use of the Vehicle is a contract for rental of that
                Vehicle and is a transfer of possession and use only. You may
                not transfer or assign your rights in this Agreement or your
                right to use the Vehicle. You represent that you have a valid,
                unexpired driver’s license and will inform us of any changes
                during the Rental Period.
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textNormal}>
                (b) We may offer to rent certain Optional Equipment for an
                additional charge. Optional Equipment is subject to
                availability, is rented without warranty in AS IS condition WITH
                ALL FAULTS, and must be returned at the end of the Rental Period
                in the same condition as when rented. Optional Equipment must be
                inspected and installed by you, and you must follow manufacturer
                instructions for all Optional Equipment.
              </Text>
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            <Text style={style.textNormal}>
              <Text style={style.indented}>
                {spaces(6)} (c){" "}
                <Text>To the fullest extent permitted by law:</Text>{" "}
              </Text>
            </Text>
          </Text>

          <View style={{ paddingLeft: 25 }}>
            <Text style={{ ...style.headingText }}>
              <Text style={style.textNormal}>
                <Text style={style.indented}>
                  {spaces(6)} i. We may repossess the Vehicle at your expense
                  without notice to you if the Vehicle is abandoned or used in
                  violation of law or this Agreement;
                </Text>
              </Text>
            </Text>
            <Text style={{ ...style.headingText }}>
              <Text style={style.textNormal}>
                <Text style={style.indented}>
                  {spaces(6)} ii. You agree to indemnify, defend, and hold
                  harmless Go Rentals and our parents, subsidiaries, affiliates,
                  members, officers, directors, employees, and agents from all
                  claims, liability, costs and attorney fees resulting from, in
                  connection with, or arising out of: (A) this rental; (B) your
                  use and/or possession of the Vehicle; and/or (C) your use
                  and/or possession of Optional Equipment.
                </Text>
              </Text>
            </Text>
            <Text style={{ ...style.headingText }}>
              <Text style={style.textNormal}>
                <Text style={{ ...style.indented, ...style.textBold }}>
                  {spaces(6)} iii. WE MAKE NO WARRANTIES, WHETHER EXPRESS,
                  IMPLIED OR APPARENT, REGARDING THE VEHICLE OR OPTIONAL
                  EQUIPMENT, INCLUDING ANY WARRANTY OF MERCHANTABILITY OR ANY
                  WARRANTY THAT THE VEHICLE OR OPTIONAL EQUIPMENT IS FIT FOR A
                  PARTICULAR PURPOSE.
                </Text>
              </Text>
            </Text>
          </View>
        </View>
        {/* 4 */}
        <View style={style.textcontainer}>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(3)} 4.{" "}
              <Text style={style.underline}>CONDITION/RETURN OF VEHICLE.</Text>{" "}
            </Text>
          </Text>
        </View>
        <View style={style.textcontainer}>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textNormal}>
                (a) You agree that you are renting the Vehicle “As Is,” and that
                you have an opportunity to inspect it before leaving the
                premises. You must return the Vehicle to the rental office where
                you picked it up or to another location that we identify, on the
                date and time specified (or sooner upon our oral or written
                demand), and in the same condition that you received it, except
                for ordinary wear.
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textNormal}>
                (b) To extend a rental you must contact our rental office before
                the due-in date.
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textNormal}>
                (c) If a Vehicle is returned after closing hours, you remain
                responsible for the safety of and damage to it until we inspect
                it upon our next opening for business. All Charges may continue
                to accrue until the return location opens for business.
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textNormal}>
                (d) Service to a Vehicle or replacement of parts or accessories
                during a rental must have our prior approval. You must return a
                Vehicle with at least the same amount of fuel as when rented,
                unless you purchase a pre-paid fuel option.{" "}
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                <Text style={style.textNormal}>(e)</Text> If the Vehicle is not
                returned on the date and time indicated on this Agreement, we
                reserve the right to report the Vehicle stolen to the
                appropriate authorities in accordance with applicable law.{" "}
              </Text>
            </Text>
          </Text>
        </View>
        {/* 5 */}
        <View style={style.textcontainer}>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(3)} 5.{" "}
              <Text style={style.underline}>
                RESPONSIBILITY FOR DAMAGE OR LOSS.
              </Text>{" "}
              <Text style={style.textNormal}>
                You must report all accidents or incidents of theft or vandalism
                to us and the police as soon as you discover them. You are
                responsible for all damage to or loss or theft of the Vehicle
                during the Rental Period, regardless of fault, resulting from
                any cause, including damage caused by collisions, weather,
                vandalism, theft, road conditions and acts of nature. Your
                responsibility will include:{" "}
                <Text style={style.textBold}>(a)</Text> all physical damage to
                the Vehicle measured as follows: (i) if we determine that the
                Vehicle is a total loss, the fair market value of the Vehicle,
                less salvage; (ii) if we determine that the Vehicle is
                repairable: (A) the difference between the value of the Vehicle
                immediately before the damage and the value immediately after
                the damage; or (B) the reasonable estimated retail value or
                actual cost of repair plus Diminished Value;{" "}
                <Text style={style.textBold}>(b)</Text> Loss of Use, measured by
                multiplying your daily rental rate either by the actual or
                estimated number of days from the date the Vehicle is damaged
                until it is replaced or repaired, which you agree represents a
                reasonable estimate of Loss of Use damages and not a penalty{" "}
                <Text style={style.textBold}>
                  (Loss of Use is payable regardless of fleet utilization); (c)
                </Text>{" "}
                a reasonable administrative fee;{" "}
                <Text style={style.textBold}>(d)</Text> towing, storage, and
                impound charges and other reasonable incidental and
                consequential damages; and{" "}
                <Text style={style.textBold}>(e)</Text> all costs associated
                with our enforcement of this Agreement.
              </Text>
            </Text>
          </Text>
        </View>
        {/* 6 */}
        <View style={style.textcontainer}>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(3)} 6.{" "}
              <Text style={style.underline}>ROADSIDE ASSISTANCE.</Text> For
              roadside assistance, contact the number on your Rental Agreement
              Face Page.{" "}
              <Text style={style.textNormal}>
                Charges apply for any roadside assistance services provided to
                you.
              </Text>
            </Text>
          </Text>
        </View>
        {/* 7 */}
        <View style={style.textcontainer}>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(3)} 7.{" "}
              <Text style={style.underline}>PROHIBITED USES.</Text>{" "}
              <Text style={style.textNormal}>
                The following uses of the Vehicle are prohibited and are
                material breaches of this Agreement{" "}
                <Text style={style.textBold}>(“Prohibited Uses”).</Text> The
                Vehicle may not be used:
              </Text>
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}(a){" "}
              <Text style={style.textBold}>
                by anyone who is not an Authorized Driver, or by anyone whose
                driving license is suspended;
              </Text>{" "}
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (b) by anyone under the influence of alcohol or a controlled
                substance;{" "}
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (c) by anyone who obtained the Vehicle or extended the rental by
                giving us false, fraudulent or misleading information;
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (d) in furtherance of any illegal purpose or under any
                circumstance that would constitute a felony or other violation
                of law (other than a minor traffic violation);
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (e) to carry persons or property for hire, including use of the
                Vehicle as a taxi, limousine, “black car,” transportation
                network company vehicle, delivery services, or for similar
                commercial use;
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (f) to transport groups, such as church groups, scout troops, or
                athletic teams;
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>(g) to push or tow anything;</Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (h) in any race, speed test or contest;
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>(i) to teach anyone to drive;</Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (j) to carry dangerous or hazardous items or illegal materiel;
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (k) outside the United States or Canada;
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>(l) on unpaved roads;</Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (m) to transport more persons than the Vehicle has seat belts,
                or to carry persons outside the passenger compartment;
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (n) to transport children without approved child safety seats as
                required by law;{" "}
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (o) when the odometer has been tampered with or disconnected;
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (p) when it is reasonable for you to know that further operation
                would damage the Vehicle;
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (q) with inadequately secured cargo;
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (r) if applicable, by anyone who lacks experience operating a
                manual transmission;
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (s) in connection with a willful, wanton or reckless act;
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (t) by anyone who is smoking or vaping any substance in the
                Vehicle;
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(6)}
              <Text style={style.textBold}>
                (u) by anyone who is driving or operating the Vehicle while
                operating hand-held devices (including cell phones, mobile
                computers, or other devices that are capable of receiving or
                transmitting telephonic communications, electronic data, email
                or text messages) while not in a hands-free mode or otherwise in
                compliance with applicable laws and regulations relating to use
                of electronic devices while driving.
              </Text>
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              <Text style={style.textBold}>
                Failure to cooperate with us or our assignee/designee in the
                investigation of a damage incident or claim may invalidate
                optional protection that you purchase.
              </Text>
              <Text style={style.textNormal}>
                PROHIBITED USE OF THE VEHICLE VIOLATES THIS AGREEMENT AND MAY
                VOID ALL LIABILITY AND OTHER INSURANCE COVERAGE (TO THE FULLEST
                EXTENT PERMITTED BY LAW).
              </Text>
            </Text>
          </Text>
        </View>
        {/* 8 */}
        <View style={style.textcontainer}>
          <Text style={{ ...style.headingText }}>
            <Text style={style.indented}>
              {spaces(3)} 8.{" "}
              <Text style={style.underline}>COLLISION DAMAGE WAIVER.</Text>{" "}
            </Text>
          </Text>

          <Text style={{ ...style.headingText }}>
            {spaces(6)}
            <Text style={style.textNormal}>
              (a) If you purchase CDW, we will waive our right to hold you
              financially responsible for damage to or loss of the Vehicle.
            </Text>
            <Text style={style.textBold}>
              {" "}
              Any CDW that you purchase will be invalidated, and we do not waive
              our right to hold you financially responsible for loss of or
              damage to the Vehicle that results from a Prohibited Use described
              in Paragraph 7 above. CDW may also be void if you fail to report
              an accident or incident to the police or to cooperate in a loss
              investigation by us or our insurer.
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            {spaces(6)}
            <Text style={style.textBold}>
              <Text style={style.textNormal}>(b)</Text> CDW is not insurance, is
              optional, and may duplicate coverage under your own insurance
              policy or credit card. You may wish to check with your insurance
              representative or credit card company to determine whether you
              have coverage or protection for damage or loss of the Vehicle.{" "}
              <Text style={style.textNormal}>
                CDW does not apply to: (i) comprehensive loss, such as damage to
                or loss of the Vehicle due to theft (unless you are in
                possession of the keys or key fob provided at the time of rental
                and report the theft to us and the police within 24 hours after
                learning of the theft), vandalism, act of nature, riot or civil
                disturbance, hail, flood or fire; or other comprehensive loss
                not caused by collision or upset; (ii) keys, key fobs; (iii)
                transponders; or (iv) Optional Equipment that we rent to you for
                use in the Vehicle.
              </Text>{" "}
            </Text>
          </Text>
          <Text style={{ ...style.headingText }}>
            {spaces(6)}
            <Text style={style.textBold}>
              <Text style={style.textNormal}>(c)</Text> You may accept CDW by
              selecting CDW when you reserve a Vehicle or at the time you pick
              up a vehicle. You agree to pay the per-day CDW charge in effect at
              the time of rental for each full or partial day for each rental
              for which you have selected CDW.
            </Text>
          </Text>
        </View>
        <View style={style.textcontainer}>
          <Text style={{ ...style.headingText }}>
            {spaces(3)} 9.{" "}
            <Text style={style.underline}>
              RESPONSIBILITY TO OTHERS; INSURANCE.
            </Text>{" "}
            <Text style={style.textNormal}>
            You are responsible for all damage or loss caused to others and
            their property. You agree to maintain automobile insurance during
            the term of each rental which provides to us, and to you, the
            following primary coverage: (a) Bodily injury{' '}
            <Text  style={style.textBold}>(BI)</Text> and property
            damage <Text  style={style.textBold}>(“PD“)</Text>{' '}
            liability coverage; (b) Personal injury protection{' '}
            <Text  style={style.textBold}>(“PIP“)</Text>, no-fault, or
            similar coverage where required; (c) Uninsured/underinsured{' '}
            <Text  style={style.textBold}>(“UM“/“UIM“)</Text> coverage
            where required, and (d) Comprehensive and collision damage coverage
            extending to the Vehicle. Your insurance coverage must provide at
            least the minimum limits of coverage required by the financial
            responsibility laws of the state where the loss occurs.{' '}
            <Text  style={style.textBold}>
              To the extent permitted by law, by signing this Agreement, you
              reject UM, UIM, and supplemental no-fault or PIP coverages. If we
              are required to provide such coverage, you select the minimum
              limits required by law.
            </Text>{' '}
            In states where the law requires us to provide insurance, your
            insurance will be primary. Any insurance we are required to provide
            applies only to claims of accidental BI and PD resulting from the
            use of the Vehicle, and is excess to any other valid and collectible
            insurance whether primary, secondary, excess or contingent. Our
            insurance policy contains exclusions, conditions, and limitations
            applicable to anyone claiming coverage. You agree to cooperate with
            our insurer if any claim is made, and give us immediate notice of
            damage, claim, or lawsuit against you. Engaging in a Prohibited Use
            described in Paragraph 7 of this Agreement or any other material
            breach of this Agreement may void any insurance coverage.{' '}
            <Text  style={style.textBold}>
              The Vehicle may not be taken to Mexico under any circumstances.
            </Text>
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  headingText: {
    fontSize: 9,
    fontWeight: "bold",
    fontFamily: "Karla",
    textAlign: "justify",
    lineHeight: 1.7,
    marginBottom: 3,
  },
  text: {
    fontSize: 9,
    fontFamily: "Karla",
    textAlign: "justify",
    lineHeight: 1.7,
    marginBottom: 10,
    fontWeight: "normal",
  },
  textcontainer: { marginBottom: 8 },
  noticeText: {
    fontSize: 9,
    fontWeight: "bold",
    lineHeight: 1.7,
    fontFamily: "Karla",
    textAlign: "justify",
    marginBottom: 8,
  },
  underline: {
    textDecoration: "underline",
  },
  textNormal: {
    fontWeight: "normal",
  },
  textBold: {
    fontWeight: "bold",
  },
  indented: {},
  heading: { fontWeight: 700, fontSize: 12, fontFamily: "Karla" },
  labelText: {
    fontSize: 9,
    fontFamily: "Karla",
  },
  signatureContainer: {
    marginTop: 5,
    rowGap: 5,
    marginBottom: 15,
  },
});

export default RentalAgreement;
