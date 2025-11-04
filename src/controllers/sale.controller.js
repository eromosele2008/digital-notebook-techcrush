import Sale from "../models/sale.model.js";

// Create new sale
export const createSale = async (req, res) => {
  try {
    const { title, amount, category, date, note, userId } = req.body;

    const sale = await Sale.create({
      title,
      amount,
      category,
      date,
      note,
      userId,
    });

    res.status(201).json({ message: "Sale added successfully", sale });
  } catch (error) {
    res.status(500).json({ message: "Error creating sale", error });
  }
};

// Get all sales
export const getSales = async (req, res) => {
  try {
    const sales = await Sale.findAll();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sales", error });
  }
};

// Get total sales amount

export const getTotalSales = async (req, res) => {
  try {
    const total = await Sale.sum("amount");
    res.status(200).json({ totalSales: total || 0 });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching total sales", error: error.message });
  }
};

// Get single sale by ID
export const getSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await Sale.findByPk(id);

    if (!sale) return res.status(404).json({ message: "Sale not found" });
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sale", error });
  }
};

// Update sale by ID
export const updateSale = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await Sale.findByPk(id);

    if (!sale) return res.status(404).json({ message: "Sale not found" });

    await sale.update(req.body);
    res.status(200).json({ message: "Sale updated successfully", sale });
  } catch (error) {
    res.status(500).json({ message: "Error updating sale", error });
  }
};

// Delete sale by ID
export const deleteSale = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await Sale.findByPk(id);

    if (!sale) return res.status(404).json({ message: "Sale not found" });

    await sale.destroy();
    res.status(200).json({ message: "Sale deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting sale", error });
  }
};

// Delete all sales
export const deleteAllSales = async (req, res) => {
  try {
    await Sale.destroy({ where: {} });
    res.status(200).json({ message: "All sales deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting all sales", error });
  }
};
