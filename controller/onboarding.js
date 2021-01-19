const { validationResult } = require("express-validator/check");
const User = require("../models/user");
const ExcelContent = require("../models/excelContent");

const xlsx = require("xlsx");
// Check if connection exists
exports.checkConnection = (req, res, next) => {
  try {
    res.status(200).json({ message: "Connection Established" });
  } catch (err) {
    next(err);
  }
};

exports.storeExcel = async (req, res, next) => {
  try {
    const wb = xlsx.readFile(req.file.path);
    const sheetName = wb.SheetNames[0];
    const ws = wb.Sheets[sheetName];
    const sheetContents = xlsx.utils.sheet_to_json(ws);

    sheetContents.forEach(async (row) => {
      const { Address1, City, State, ZipmPhone, Fax, Gender } = row;
      const practiceName = row["Practice Name"];
      const practiceType = row["Practice Type"];

      const firstName = row["First Name"];
      const lastName = row["Last Name"];
      const professionalDesignation = row["Professional Designation"];

      const excelContent = new ExcelContent({
        "Practice Name": practiceName,
        "Practice Type": practiceType,
        "First Name": firstName,
        "Last Name": lastName,
        "Professional Designation": professionalDesignation,
        Address1,
        City,
        State,
        ZipmPhone,
        Fax,
        Gender,
      });

      await excelContent.save();
    });

    await res.status(200).json({ sheetContents });
  } catch (err) {
    next(err);
  }
};
