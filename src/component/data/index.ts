import { stateType } from "../types"


export const agreementText= (state: stateType) =>  {

    const generic = 'By signing below, you certify that you (1) had the opportunity to read, and that you agree to, the terms and conditions of this agreement as set forth on this Rental Agreement Face Page and in either the Rental Agreement Terms and Conditions or the Master Rental Terms and Conditions (the “Agreement”), (2) authorize us to process a separate payment card transaction in your name for all Charges, (3) authorize us to release your billing and rental information to a third-party processor for billing and processing purposes; (4) authorize us or a third-party processor to charge your payment card account after the rental concludes for any Tolls or Violations assessed against you, us or the Vehicle during this rental plus taxes, administrative fees of up to $50 per Toll or Violation, convenience fees, service charges, and related fees; (5) accept or decline Optional Products as shown on the Face Page; (6) understand that all Charges are subject to our final audit and authorize us to adjust your payment card account to reflect changes resulting from our audit; (7) understand that the purchase of optional insurance products or CDW is not required to rent the Vehicle, and that the optional insurance products and CDW that we offer may duplicate coverage provided by your personal automobile insurance policy or another source of coverage; and (8) agree to our collection and use of vehicle data and texting and calling terms as described in Paragraphs 15 and 17 of the Rental Agreement Terms and Conditions (or the Master Rental Agreement Terms and Conditions if applicable).'

    return {
        california: generic,
        arizona: generic,
        colorado: generic,
        connecticut: generic,
    } [state]
}