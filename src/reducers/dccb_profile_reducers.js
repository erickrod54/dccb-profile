import { 
    SIDEBAR_OPEN, 
    SIDEBAR_CLOSE

    } from '../utils/actions';

/** DCCB - Portfolio version 6 - reducer file 
 * - Features: 
 * 
 *          --> Building 'SIDEBAR_OPEN' action.
 * 
 *          --> Building 'SIDEBAR_CLOSE' action.  
 * 
 * Note: These first actions will be use to handle
 * the 'SideBar' features
 */

const dccb_profile_reducer = ( state, action ) => {

    /**here i build the 'SIDEBAR_OPEN' action*/
    if (action.type === SIDEBAR_OPEN) {
        /**i spread/copy the state and switch the 
         * 'isSidebarOpen' value to 'true' */
        return {...state, isSidebarOpen: true}
    }

    /**here i build the 'SIDEBAR_OPEN' action*/
    if (action.type === SIDEBAR_CLOSE) {
        /**i spread/copy the state and switch the 
         * 'isSidebarOpen' value to 'false' */
        return {...state, isSidebarOpen: false}
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default dccb_profile_reducer;