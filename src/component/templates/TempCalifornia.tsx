import { StyleSheet, Text, View } from "@dna/react-pdf";
import TemplateSection from "../common/TemplateSection";
import HeadingSection from "../contract/HeadingSection";

type TemplateProps ={ 
    title?: string;

}

export const Template = ({title= ''}: TemplateProps) => {

    const spaces = (num: number) => {
      return <Text style={{ color: "transparent" }}>{"_".repeat(num)}</Text>;
    };

    return (
        <View>
           <HeadingSection text={title} />
          <View>
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                <Text style={style.indented}>
                  {spaces(3)} 1.{" "}
                  <Text style={style.underline}>AGREEMENT AND PARTIES.</Text>{" "}
                </Text>
                <Text style={style.text}>
                  {" "}
                  These Rental Agreement Terms and Conditions, the Rental Agreement Face Page signed by you, and any other documents which you are required to sign to rent the vehicle together constitute the rental agreement (the “Agreement”) between you (the renter) and Gitibin & Associates, Inc., a California corporation doing business as “Go Rentals” <Text style={style.textBold}>(“Go Rentals”)</Text>.
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
                  <Text>“Additional Mandatory Charges”</Text>{" "}
                  <Text style={style.text}>
                  means any separately stated charges that we require you pay that specifically relate to the operation of a rental vehicle, including customer facility charges, airport concession recovery fees, road safety program fees, vehicle license recovery fees, or any government-imposed tax or fee.
                  </Text>
                </Text>
              </Text>
              <Text style={{ ...style.headingText }}>
                <Text style={style.indented}>
                  {spaces(6)} <Text style={style.text}>(b)</Text>{" "}
                  <Text>“Authorized Driver”</Text>{" "}
                  <Text style={style.text}>
                  means a driver authorized to use the Vehicle.  Except where otherwise specifically authorized by applicable law, only the renter and an additional driver listed by us on your Rental Agreement Face Page at the time of rental are authorized to drive the Vehicle.  Except as otherwise required by applicable law, each Authorized Driver must have a valid driver’s license and be at least age 25. 
                  </Text>
                </Text>
              </Text>
    
              <Text style={{ ...style.headingText }}>
                <Text style={style.indented}>
                  {spaces(6)} <Text style={style.text}>(c)</Text> <Text>“CDW”</Text>{" "}
                  <Text style={style.text}>means Collision Damage Waiver.</Text>
                </Text>
              </Text>
    
              <Text style={{ ...style.headingText }}>
                <Text style={style.indented}>
                  {spaces(6)} <Text style={style.text}>(d)</Text>{" "}
                  <Text>“Charges”</Text>{" "}
                  <Text style={style.text}>
                    means the fees and charges that are incurred under this Agreement.
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
                  {spaces(6)} <Text style={style.text}>(g)</Text>{" "}
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
                  {spaces(6)} <Text style={style.text}>(h)</Text>{" "}
                  <Text>“Toll”</Text>{" "}
                  <Text style={style.text}>
                    means a toll charge assessed by a charging authority for use of
                    a toll lane.
                  </Text>
                </Text>
              </Text>
    
              <Text style={{ ...style.headingText }}>
                <Text style={style.indented}>
                  {spaces(6)} <Text style={style.text}>(i)</Text>{" "}
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
                  {spaces(6)} <Text style={style.text}>(j)</Text>{" "}
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
                  {spaces(6)} <Text style={style.text}>(k)</Text>{" "}
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
                  {spaces(6)} <Text style={style.text}>(l)</Text>{" "}
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
                  {spaces(6)} <Text style={style.text}>(m)</Text>{" "}
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
                    <Text style={{fontWeight: 'bold'}}>(a)</Text> Your use of a Vehicle is a contract for rental of that Vehicle and is a transfer of possession and use only.  You may not transfer or assign your rights in this Agreement or your right to use the Vehicle.
                  </Text>
                </Text>
              </Text>
              <Text style={{ ...style.headingText }}>
                <Text style={style.indented}>
                  {spaces(6)}
                  <Text style={style.textNormal}>
                  <Text style={{fontWeight: 'bold'}}>(b)</Text> We may offer to rent certain Optional Equipment for an
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
                    {spaces(6)} <Text style={{fontWeight: 'bold'}}>(c)</Text>{" "}
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
                  (a) You agree that you are renting the Vehicle “As Is,” and that you have an opportunity to inspect it before leaving the premises. You must return the Vehicle to the rental office where you picked it up or to another location that we identify, on the date and time specified (or sooner upon our oral or written demand), and in the same condition that you received it, except for ordinary wear. You represent that you have a valid, unexpired driver’s license and will inform us of any changes during the Rental Period.
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
                  You are responsible for all damage to or loss of the Vehicle caused by collision, whether or not you are at fault.  Subject to the limits of California law, your responsibility will include: (a) all physical and mechanical damage to the Vehicle measured as follows: (i) if we determine that the Vehicle is a total loss, the fair market value of the Vehicle, calculated in accordance with Cal. Civ. Code § 1939.07(a), less salvage; (ii) if we determine that the Vehicle is repairable: the actual cost of the repairs performed or the estimated cost of repairs up to the fair market value of the Vehicle; (b) an administrative fee, calculated in accordance with Cal. Civ. Code § 1939.05(d); (c) our actual charges for towing, storage, and impound; and (d) all costs associated with our enforcement of this Agreement or collection of Charges, including attorneys’ fees, collection fees, and costs whether or not litigation is commenced.  You are responsible for loss due to theft of the Vehicle and any damage caused by vandalism that occurs in connection with a theft if you fail to exercise ordinary care while in possession of the Vehicle; you will be presumed to have no liability for any loss due to theft if: (a) an Authorized Driver has possession of the ignition key furnished by us or an Authorized Driver establishes that the ignition key furnished by us was not in the Vehicle at the time of the theft, and (b) an Authorized Driver files an official report of the theft with the police or other law enforcement agency within 24 hours of learning of the theft and reasonably cooperates with us and the police or other law enforcement agency in providing information concerning the theft..  You are responsible for damage due to vandalism not associated with theft of the Vehicle up to a maximum of $500.
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
                  </Text>{" "}
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
                <Text style={style.indented}>
                  {spaces(3)}{" "}<Text>NOTICE ABOUT YOUR FINANCIAL RESPONSIBILITY AND OPTIONAL DAMAGE WAIVER </Text>         
                </Text>
              </Text>
              <Text style={{ ...style.headingText }}>
                  {spaces(3)}{" "}<Text style={style.text}>You are responsible for all collision damage to the rented vehicle even if someone else caused it or the cause is unknown. You are responsible for the cost of repair up to the value of the vehicle, and towing, storage, and impound fees. </Text>         
              </Text>

              <Text style={{ ...style.headingText }}>
                  {spaces(3)}{" "}<Text style={style.text}>Your own insurance, or the issuer of the credit card you use to pay for the vehicle rental transaction, may cover all or part of your financial responsibility for the rented vehicle. You should check with your insurance company, or credit card issuer, to find out about your coverage and the amount of the deductible, if any, for which you may be liable. </Text>         
              </Text>

              <Text style={{ ...style.headingText }}>
                  {spaces(3)}{" "}<Text style={style.text}>Further, if you use a credit card that provides coverage for your potential liability, you should check with the issuer to determine if you must first exhaust the coverage limits of your own insurance before the credit card coverage applies.</Text>         
              </Text>
              <Text style={{ ...style.headingText }}>
                  {spaces(3)}{" "}<Text style={style.text}>We will not hold you responsible if you buy a damage waiver (CDW). But a damage waiver (CDW) will not protect you if: </Text>         
              </Text>

              <Text style={{ ...style.headingText }}>
                  {spaces(3)}{" "}(1) Damage or loss results from an Authorized driver`s (A) intentional, willful, wanton, or reckless conduct, (B) operation of the vehicle under the influence of drugs or alcohol in violation of Section 23152 of the California Vehicle Code, (C) towing or pushing anything, or (D) operation of the vehicle on an unpaved road if the damage or loss is a direct result of the road or driving conditions.        
              </Text>
              <Text style={{ ...style.headingText }}>
                  {spaces(3)}{" "}(2) Damage or loss occurs while the Vehicle is (A) used for commercial hire, (B) used in connection with conduct that could be properly charged as a felony, (C) involved in a speed test or contest or in driver training activity, (D) operated by a person other than an Authorized Driver, or (E) operated outside the United States.        
              </Text>
              <Text style={{ ...style.headingText }}>
                  {spaces(3)}{" "}(3) An Authorized Driver: (A) provided fraudulent information to us, or (B) provided false information and we would not have rented the Vehicle if we had instead received true information.         
              </Text>

              <Text style={{ ...style.headingText }}>
                  {spaces(3)}{" "}<Text style={style.text}>The cost of this optional damage waiver is noted on the Rental Agreement Face Page. </Text>         
              </Text>
              <Text style={{ ...style.headingText }}>
                  {spaces(3)}{" "}<Text style={style.text}>Purchase of CDW is optional and is not required in order to rent the Vehicle.</Text>         
              </Text>
              <Text style={{ ...style.headingText }}>
                  {spaces(3)}{" "}<Text style={style.text}>You may accept CDW by selecting CDW when you reserve a Vehicle or at the time you pick up a vehicle. You agree to pay the per-day CDW charge in effect at the time of rental for each full or partial day for each rental for which you have selected CDW.</Text>         
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
                  following primary coverage: (a) Bodily injury{" "}
                  <Text style={style.textBold}>(BI)</Text> and property damage{" "}
                  <Text style={style.textBold}>(“PD“)</Text> liability coverage; (b)
                  Personal injury protection{" "}
                  <Text style={style.textBold}>(“PIP“)</Text>, no-fault, or similar
                  coverage where required; (c) Uninsured/underinsured{" "}
                  <Text style={style.textBold}>(“UM“/“UIM“)</Text> coverage where
                  required, and (d) Comprehensive and collision damage coverage
                  extending to the Vehicle. Your insurance coverage must provide at
                  least the minimum limits of coverage required by the financial
                  responsibility laws of the state where the loss occurs.{" "}
                  <Text style={style.textBold}>
                    To the extent permitted by law, by signing this Agreement, you
                    reject UM, UIM, and supplemental no-fault or PIP coverages. If
                    we are required to provide such coverage, you select the minimum
                    limits required by law.
                  </Text>{" "}
                  In states where the law requires us to provide insurance, your
                  insurance will be primary. Any insurance we are required to
                  provide applies only to claims of accidental BI and PD resulting
                  from the use of the Vehicle, and is excess to any other valid and
                  collectible insurance whether primary, secondary, excess or
                  contingent. Our insurance policy contains exclusions, conditions,
                  and limitations applicable to anyone claiming coverage. You agree
                  to cooperate with our insurer if any claim is made, and give us
                  immediate notice of damage, claim, or lawsuit against you.
                  Engaging in a Prohibited Use described in Paragraph 7 of this
                  Agreement or any other material breach of this Agreement may void
                  any insurance coverage.{" "}
                  <Text style={style.textBold}>
                    The Vehicle may not be taken to Mexico under any circumstances.
                  </Text>
                </Text>
              </Text>
            </View>
            {/* 10 */}
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                <Text style={style.indented}>
                  {spaces(3)} 10.{" "}
                  <Text style={style.underline}>RESERVE; CHARGES.</Text> You permit
                  us to reserve against your payment card at the time of rental a
                  reasonable amount in addition to the estimated total charges. We
                  may use the reserve to pay all Charges. We will authorize the
                  release of an excess reserve at completion of your rental. Your
                  payment card issuer’s rules will apply to crediting your account
                  for any excess, which may not be immediately released by your card
                  issuer.
                  <Text style={style.textNormal}>{' '}
                    You will pay us at or before conclusion of each rental, or on
                    demand, all Charges, including: (a) time & mileage charge for
                    the Rental Period, including an additional mileage fee if you
                    exceed the daily mileage allowance for the vehicle class rented
                    as noted on the Face Page. Daily rates are based on a 24-hour
                    day. Any fraction of a day will be charged at the hourly rate,
                    but will not exceed the daily rate; (b) a mileage charge based
                    on our experience and records if the odometer is tampered with
                    or disconnected; (c) fees for optional products, equipment, and
                    services you purchased; (d) fuel and a refueling fee if you
                    return the Vehicle with less fuel than when rented; (e) customer
                    facility charges, airport concession fees, tourism commission
                    assessments, vehicle license recovery fees, road safety charges,
                    or other taxes, surcharges, or fees; (f) expenses we incur
                    locating and recovering the Vehicle if you fail to return it or
                    if we repossess it under the terms of this Agreement; (g) all
                    costs we incur enforcing or defending our rights under this
                    Agreement; (h) a reasonable fee to clean the Vehicle if returned
                    substantially less clean than when rented or if the Vehicle is
                    returned containing evidence of smoking; (i) a lost key fee if
                    you lose the keys or key fob to the Vehicle; (j) a surcharge if
                    you return the Vehicle to a location other than the location
                    where you rented the Vehicle or if you do not return it on the
                    date and time due; (k) towing, storage charges, forfeitures,
                    court costs, penalties and all other costs we incur from your
                    use of the Vehicle; (l) replacement cost of lost or damaged
                    parts and supplies used in Optional Equipment; and (m) a
                    Government Administrative Rate Supplement (GARS) of $5 per day
                    (if applicable).{" "}
                  </Text>
                  <Text style={style.textBold}>
                    {" "}
                    If you use a credit card or other payment card issued by a bank
                    or financial institution outside of the United States, we will
                    charge your credit card in US dollars. Any currency conversion
                    will be handled by the issuing bank and any conversion charges
                    by the issuing bank shall be your responsibility. All Charges
                    are subject to our final audit. If errors are discovered after
                    the close of this transaction, you authorize us to correct the
                    Charges with the payment card issuer.{" "}
                  </Text>
                </Text>
              </Text>
            </View>
            {/* 11 */}
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                {spaces(3)}11.{" "}
                <Text style={style.underline}>
                  LIABILITY FOR TOLLS, VIOLATIONS, AND OTHER CHARGES; DISCLAIMER OF
                  LIABILITY.
                </Text>{" "}
                <Text style={style.textNormal}>
                  You are liable for all Tolls and Violations assessed against you,
                  us, or the Vehicle during the Rental Period.
                </Text>
              </Text>
            </View>
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                <Text style={style.textNormal}>
                  {spaces(6)}(A){" "}
                  <Text style={{ ...style.textBold, ...style.underline }}>
                    Tolls.
                  </Text>{" "}
                  The Vehicle may be enrolled in an electronic toll collection
                  service to pay for Tolls electronically. If you use any toll
                  facility, including a cashless toll road, tunnel, or bridge, and
                  do not have your own electronic device or pass that is accepted by
                  the relevant toll authority or make other payment arrangements,
                  you agree that we (or a third-party processor (“Processor”)) may,
                  in our discretion and without prior notification to you, pay the
                  Toll plus applicable taxes and fees on your behalf directly to the
                  charging authority. You authorize us or the Processor to charge
                  any payment card of yours on file without notice for all Tolls
                  assessed against the Vehicle during the rental at the highest
                  undiscounted rate (whichever is higher) plus: any fines or fees
                  assessed by the toll authority; and an administrative fee of up to
                  $50 per Toll.{" "}
                </Text>{" "}
                Certain toll roads do not accept cash. To avoid toll violations and
                associated fines, fees, and taxes (and our or a Processor’s
                administrative fee), you must pay all Tolls with a personal
                transponder that is accepted on the road; use only cash lanes and
                pay cash; plan a route to avoid Tolls; or consult local authorities
                for other payment methods.
              </Text>
            </View>
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                <Text style={style.textNormal}>
                  {spaces(6)}(B){" "}
                  <Text style={{ ...style.textBold, ...style.underline }}>
                    Violations.
                  </Text>{" "}
                  You are responsible to pay for all Violations. If we are notified
                  that we may be responsible for a Violation, you agree that we or a
                  Processor may in our discretion and without prior notification to
                  you, pay the Violation plus applicable taxes and fees on your
                  behalf directly to the charging authority, and you authorize us or
                  the Processor to charge any payment card of yours on file our
                  administrative fee of up to $50 for each “Violation” plus the
                  amount charged by the “Violation” authority.
                </Text>
              </Text>
            </View>
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                <Text style={style.textNormal}>
                  {spaces(6)}(C){" "}
                  <Text style={{ ...style.textBold, ...style.underline }}>
                    General.
                  </Text>{" "}
                  If we or a Processor pay a Toll and/or Violation on your behalf,
                  you understand that you may not be able to challenge the validity
                  of the Toll or Violation, and you authorize us to release your
                  rental information to the charging authorities. Payments for Tolls
                  and Violations may not be processed until several weeks after
                  conclusion of your rental. You authorize us to release your rental
                  information, including personally identifiable information, to
                  government officials and other authorities charged with enforcing
                  Tolls and Violations. If we or a Processor pay a Toll or Violation
                  assessed on the Vehicle during the Rental Period, you authorize us
                  or the Processor to charge all payments and administrative fees to
                  the payment card you used to pay for the rental.
                </Text>
              </Text>
            </View>
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                <Text style={style.textNormal}>
                  You authorize us to release your rental information, including
                  personally identifiable information, to government officials and
                  other authorities charged with enforcing Tolls and Violations. If
                  we or a Processor pay a Toll or Violation assessed on the Vehicle
                  during the Rental Period, you authorize us or the Processor to
                  charge all payments and administrative fees to the payment card
                  you used to pay for the rental. You authorize us or a Processor to
                  contact you directly or to send invoices regarding any tolls,
                  citations, fines, or penalties incurred by you or assessed against
                  us to our Vehicle while the Vehicle was rented by you. We disclaim
                  all liability arising from any error by a tolling or charging
                  authority.
                </Text>
              </Text>
            </View>
            {/* 12 */}
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                {spaces(3)}12.{" "}
                <Text style={style.underline}>RENTAL OF ELECTRIC VEHICLES.</Text>{" "}
                <Text style={style.textNormal}>
                The terms in this Paragraph 12 apply to the rental of an electric vehicle (“EV”) from Go Rentals. An EV is defined as a vehicle that exclusively uses battery power rather than gasoline or diesel fuel. 
                  fuel.
                </Text>
              </Text>
            </View>
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                <Text style={style.textNormal}>
                  {spaces(6)}(a) Battery-powered electric vehicles (EVs) use battery
                  power rather than gasoline. For your safety, as well as for the
                  mechanical condition of our EV, we strongly recommend that you
                  charge the battery as often as possible, and keep it between a
                  15%-80% charge level. If the battery charge level falls below 15%,
                  it can cause battery damage, restricted entry to the EV, and may
                  significantly reduce battery life. If we are unable to enter the
                  vehicle, and/or the battery charge level is below 15%, the vehicle
                  will be towed to the nearest EV dealership. You will be
                  responsible for paying towing fees, repair fees, idle time, and
                  any other fees incurred as a result of battery damage, all of
                  which will be added to your final invoice.
                </Text>
              </Text>
            </View>
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                <Text style={style.textNormal}>
                  {spaces(6)}(b) The battery charge level will be recorded at the
                  time of pickup. Please return the vehicle at the same level or
                  higher. If the EV is returned with a lower charge level, you will
                  be assessed a battery charge fee as follows: (1) $25 if the return
                  charge level is 50% to 75%; (2) $50 if the return charge level is
                  25% to 50%; and (3) $100 if the return charge level is less than
                  25%. The battery charge fee is in addition to any idle time fees
                  billed to Go Rentals, or fees related to charging station damages
                  caused by your negligence.
                </Text>
              </Text>
            </View>
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                <Text style={style.textNormal}>
                  {spaces(6)}(c) Key cards, key fobs and charging equipment are
                  provided at the time of pick-up of the EV. Lost or damaged key
                  cards will incur a fee of $200, lost key fobs will incur a fee of
                  $400, and lost charging equipment will incur a fee of $800.
                </Text>
              </Text>
            </View>
            {/* 13 */}
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                {spaces(3)}13.{" "}
                <Text style={style.underline}>PERSONAL INFORMATION.</Text>{" "}
                <Text style={style.textNormal}>
                  You agree that we may disclose personally identifiable information
                  about you to our affiliates and other third parties in connection
                  with our enforcement of our rights under this Agreement and other
                  legitimate business functions. For a copy of the Go Rentals
                  Privacy Policy, see{" "}
                  <Text style={{ color: "#4a9df0" }}>
                    https://www.gorentals.com/privacy/.
                  </Text>
                </Text>
              </Text>
            </View>
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                {spaces(3)}14.{" "}
                <Text style={style.underline}>
                  COLLECTION AND USE OF VEHICLE DATA.
                </Text>{" "}
                <Text style={style.textNormal}>
                  Vehicles may be equipped with global positioning satellite (GPS)
                  technology or another telematics system, and/or an event data
                  recorder (EDR) that collects and transmits data from the Vehicle.
                  <Text style={style.textBold}>
                    {" "}
                    You acknowledge and authorize that your use of this Vehicle may
                    be remotely monitored by us or on behalf of us through such
                    systems to the fullest extent permitted by law. This remote
                    monitoring may include collection of Vehicle data, such as:
                    location, odometer, oil life, fuel level, tire pressure, battery
                    state of charge, diagnostic trouble codes, and other elements
                    that we may deem necessary (and to the fullest extent permitted
                    by applicable law).
                  </Text>{" "}
                  Once collected, the Vehicle data may be combined with other
                  information that you have provided to us and used to generate
                  safety, performance, and other similar information so that we can
                  deliver better services. Our use of the information collected from
                  the Vehicle may include sharing the data with third parties (such
                  as our service providers), as well as storage of this information
                  after the expiration of your rental agreement. The renter agrees
                  to inform all drivers and passengers of the Vehicle of the terms
                  of this Paragraph 14, and that you have authorized release of
                  information collected by GPS or other telematics system or EDR.
                </Text>
              </Text>
            </View>
            <View style={style.textcontainer}>
              <Text style={style.headingText}>
                If you download a mobile application made available by the vehicle
                manufacturer and you register the Vehicle in that application, your
                use of the application may result in the sharing of your personal
                data, vehicle information, location information and driving
                characteristics with the vehicle manufacturer. Your use of vehicle
                manufacturer applications is strictly governed by the vehicle
                manufacturer’s terms and conditions and privacy policy, and we are
                not in any way responsible for, and you release us from, any claim
                or cause of action that may arise from your use of these
                applications. Before returning the Vehicle, it is your
                responsibility to either remove the application or delete the
                Vehicle from the application. In addition, the Vehicle may be
                equipped with devices that permit you to pair your own mobile
                devices, and which may download your personal contacts,
                communications, location or other digital data. You should delete
                all personal information from the Vehicle’s systems before returning
                it.
              </Text>
            </View>
            <View style={style.textcontainer}>
              <Text style={style.headingText}>
                We are not responsible for the operability of any telematics
                navigational or other system included with the Vehicle.{" "}
                <Text style={style.textNormal}>
                  To the fullest extent permitted by law, you agree to release and
                  to indemnify, defend and hold us and our parents, subsidiaries,
                  affiliates, members, officers, directors, employees, and agents
                  harmless from any damage to persons or property caused by failure
                  of the GPS or other telematics system or EDR to operate properly,
                  or otherwise arising from the use of the GPS or other telematics
                  system or EDR.
                </Text>
              </Text>
            </View>
            {/* 15 */}
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                {spaces(3)}15.{" "}
                <Text style={style.underline}>PERSONAL PROPERTY.</Text>{" "}
                <Text style={style.textNormal}>
                  You agree that: (a) we are not responsible for damage to, loss of
                  or theft of personal property of yours or another person that we
                  received, handled or stored, or that was left or carried in or on
                  the Vehicle or in any service vehicle or in our offices, whether
                  the damage, loss, or theft was caused by our negligence or
                  otherwise; (b) to the fullest extent permitted by law, you will
                  defend, indemnify and hold us and our affiliates harmless from all
                  losses, liabilities, damages, injuries, claims, demands, costs,
                  attorney fees and other expenses arising out of your or your
                  passengers’ failure to remove any personal property; and (c) we
                  are not responsible for any claim or cause of action which may
                  arise from a prior renter`s or passenger`s failure to remove any
                  personal property, data or records from the Vehicle.
                </Text>
              </Text>
            </View>
            {/* 16 */}
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                {spaces(3)}16.{" "}
                <Text style={style.underline}>
                  ELECTRONIC COMMUNICATIONS AND CONSENT; TRANSACTIONAL EMAILS AND
                  TEXTS.
                </Text>{" "}
              </Text>
            </View>
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                <Text style={style.textNormal}>
                  {spaces(6)}(a){" "}
                  <Text style={{...style.textBold, ...style.underline}}>Electronic Communications, Generally.</Text>{" "}
                  To the fullest extent permitted by law, we may provide this Agreement and any notices or other communications (including by e-mail) regarding this Agreement, your reservation, or the rental of the Vehicle (<Text style={style.textBold}>“Communications”</Text>) to you electronically, and you agree to receive Communications from us in an electronic form. We may deliver Electronic Communications to the email address that you provide to us when entering into this Agreement or otherwise. All Communications in either electronic or paper format will be considered to be in “writing.” All Communications will be considered to have been received no later than five (5) business days after dissemination, whether or not you have received or retrieved the Communications. Although we reserve the right to provide Communications in paper format to you at the postal address you provide to us, you expressly agree that any notice or other Communications due under this Agreement may be given in email form to the email address that you provide to us. Your consent to receive Communications electronically is valid until you revoke your consent.
                </Text>
              </Text>
            </View>
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                <Text style={style.textNormal}>
                  {spaces(6)}(b){" "}
                  <Text style={{...style.textBold, ...style.underline}}>Texting & Calling.</Text>{" "}
                  By executing this Agreement, you consent to us and/or our representatives contacting you at the phone number(s) provided in connection with this Agreement for the purpose of delivering informational or transactional outreach, including customer surveys, via live, pre-recorded, or autodialed calls or texts. Your consent to receiving these calls or texts is not a condition of this Agreement or any other agreement with us. For questions about privacy, please see Paragraph 13 above.
                </Text>
              </Text>
            </View>
            {/* 17 */}
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                {spaces(3)}17.{" "}
                <Text style={style.underline}>U.S. GOVERNMENT RENTALS. </Text>{" "}
                <Text style={style.textNormal}>Rentals that are subject to the U.S. Government Rental Agreement administered by the Defense Travel Management Office will be governed by the provisions of the U.S. Government Rental Agreement, including payment of the Government Administrative Rate Supplement charge noted on the Face Page. </Text>
              </Text>
            </View>
            {/* 18 */}
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                {spaces(3)}18.{" "}
                <Text style={style.underline}>MISCELLANEOUS.</Text>{" "}
                <Text style={style.textNormal}>This Agreement constitutes the entire agreement between you and us. All prior representations and agreements, whether written or oral, between you and us regarding this rental are void. No term of this Agreement can be waived or modified except by a writing signed by us. A waiver by us of any breach of this Agreement is not a waiver of any additional breach or waiver of the performance of your obligations under this Agreement. Our acceptance of payment from you or our failure, refusal or neglect to exercise any of our rights under this Agreement does not constitute a waiver of any other provision of this Agreement.{' '}</Text>
                  To the fullest extent permitted by law, you: (a) release us from
                  any liability for consequential, special or punitive damages in
                  connection with the rental or reservation of the Vehicle; and (b)
                  waive all recourse against us for any criminal reports or
                  prosecutions that we make against you that arise out of your
                  breach of this Agreement.{" "}
                <Text style={style.textNormal}>Unless otherwise provided, any reference to a statute or regulation will be deemed to be a reference to that statute or regulation as amended from time to time or to a newly adopted statute or regulation replacing a repealed statute or regulation. If any provision of this Agreement is deemed void or unenforceable, the remaining provisions are valid and enforceable.</Text>
              </Text>
            </View>
            <View style={style.textcontainer}>
              <Text style={{ ...style.headingText }}>
                <Text style={style.textNormal}>By signing below, you certify that: (1) you hold a valid and unexpired driver’s license; and (2) you had the opportunity to read, and that you agree to, these Rental Agreement Terms and Conditions; and (3) you agree to our collection and use of vehicle data and texting and calling terms as described in Paragraphs 14 and 16 of the Agreement.</Text>
              </Text>
            </View>
          </View>
        </View>
      );
}

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