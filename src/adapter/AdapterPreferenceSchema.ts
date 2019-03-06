/**
 *  Copyright 2019 The Adaptive Web. All Rights Reserved.
 * 
 *  Licensed under the Mozilla Public License 2.0 (the "License"). 
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *  
 *      https://www.mozilla.org/en-US/MPL/2.0/
 *  
 *  or in the "license" file accompanying this file. This file is distributed 
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either 
 *  express or implied. See the License for the specific language governing 
 *  permissions and limitations under the License.
 */

/**
 * Stores the preference schema used
 */
export interface AdapterPreferenceSchema {

    [key: string]: AdapterPreferenceSchemaDefinition;

}

/**
 * Represents an individual definition in the schema
 */
export class AdapterPreferenceSchemaDefinition {
    /**
     * The type of this definition
     */
    type: string = 'string';
    /**
     * The default value
     */
    default: any;
    /**
     * A user-friendly name for this field
     */
    friendlyName: string = '';
    /**
     * A user-friendly description for this field
     */
    description: string = '';
    /**
     * Optional abstract array for types that require additional options
     */
    options?: any[];
}