import axios from "axios";
import { LOCALSTORAGE_KEYS } from "../../config";
import * as constants from "../../constants";

/**
 * Creates a new company
 *
 * @param {any} company
 * @returns {any} result
 */
export const addCompany = async (company: any): Promise<any> => {
  try {
    let config = {
      headers: {
        Authorization:
          "Bearer " +
          String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(
            /['"\\]+/g,
            ""
          ),
      },
    };
    return await axios.post(constants.baseUrl + `/companies`, company, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets a list of companies for the current user
 *
 * @returns {any} result
 */
 export const listCompaniesForLoggedInUser = async (): Promise<any> => {
  try {
    let config = {
      headers: {
        Authorization:
          "Bearer " +
          String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(
            /['"\\]+/g,
            ""
          ),
      },
    };

    return await axios.get(constants.baseUrl + `/companies/my-companies`, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets a company by ID
 *
 * @returns {any} company
 */
 export const getCompany = async (id: number): Promise<any> => {
  try {
    let config = {
      headers: {
        Authorization:
          "Bearer " +
          String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(
            /['"\\]+/g,
            ""
          ),
      },
    };

    return await axios.get(constants.baseUrl + `/companies/${id}`, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets all companies
 *
 * @returns {any} company
 */
 export const getAllCompanies = async (): Promise<any> => {
  try {
    let config = {
      headers: {
        Authorization:
          "Bearer " +
          String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(
            /['"\\]+/g,
            ""
          ),
      },
    };

    return await axios.get(constants.baseUrl + `/companies`, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets business assessement
 * @returns {Promise<Assessment[]>} response
 */
 export const getBusinessAssessment = async (companyId: number): Promise<any> => {
  try {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(/['"\\]+/g, '')
      }
    }

    return await axios.get(constants.baseUrl + `/companies/${companyId}/assessments/${companyId}`, config);
  } catch (error: any) {
    return error;
  }
};