const xlsx = require("xlsx");
const Income = require("../models/Income");

// Add Income source
exports.addIncome = async (req, res) => {
  const userID = req.user.id;
  try {
    const { icon, source, amount, date } = req.body;

    // Validate: Check for Missing Fields
    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All Fields are Rrequired!" });
    }

    const newIncome = new Income({
      userID,
      icon,
      source,
      amount,
      date: new Date(date),
    });

    await newIncome.save();
    res.status(200).json(newIncome);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get ALL Income source
exports.getAllIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const income = await Income.find({ userID: userId }).sort({ date: -1 });
    res.json(income);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Income Source
exports.deleteIncome = async (req, res) => {
  try {
    await Income.findByIdAndDelete(req.params.id);
    res.json({ message: "Income Detailed Sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Download Excel
exports.downloadIncomeExcel = async (req, res) => {
  const userId = req.user.id;

  try {
    const income = await Income.find({ userID: userId }).sort({ date: -1 });

    // Prepare data For Excel
    const data = income.map((item) => ({
      Source: item.source,
      Amount: item.amount,
      Date: item.date,
    }));

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Income");
    xlsx.writeFile(wb, "income_Details.xlsx");
    res.download("income_Details.xlsx");
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
