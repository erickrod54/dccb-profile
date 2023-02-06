/**DCCB - Portfolio version 6 - 'helpers' 
 * file- Features: 
 * 
 *     --> Building 'formatPrice' in order
 *        to format prices from cents to
 *        regular us dollars 
 * 
 * Note: This is not a convertion function,
 * its made to change visually the values
 * for the user perspective, for payments
 * processors they're going to need ammounts
 * in cents
 */

export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
        style:'currency',
        currency:'USD'
    }).format(number / 100)
}