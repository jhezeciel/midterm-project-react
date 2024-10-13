export const validateItem = (item) => {
    let errors = {};

    if (!item.id) errors.id = "ID is required!";
    if (!item.name) errors.name = "Name is required!";
    if (item.quantity <= 0) errors.quantity = "Quantity must be greater than zero!";
    if (item.price <= 0) errors.price = "Price must be greater than zero!";
    if (!item.category) errors.category = "Category is required!";

    return errors;
};
