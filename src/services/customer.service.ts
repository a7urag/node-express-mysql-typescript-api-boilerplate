import logger from "../config/logger";


const getCustomerById = async (id: number) => {
    logger.info("getCustomerById", id);
    return {

    }
};

const getCustomerOrders = async (customerId: number): Promise<any[]> => {
    logger.info("getCustomerOrders", customerId);
    return await new Promise(resolve => {
        resolve([])
    });
};

export {
    getCustomerById,
    getCustomerOrders
}