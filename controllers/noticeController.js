import Notice from "../models/Notice.js";

export const getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find().populate("user", "name email");
    res.status(200).json(notices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getNoticeById = async (req, res) => {
  try {
    const { id } = req.params;
    const notice = await Notice.findById(id).populate("user", "name email");
    if (!notice) {
      return res.status(404).json({ message: "Notice not found" });
    }
    res.status(200).json(notice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNotice = async (req, res) => {
  try {
    const { title, body, category } = req.body;
    const userId = req.userId;

    const notice = await Notice.create({ title, body, category, user: userId });

    res.status(201).json(notice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body, category } = req.body;

    const notice = await Notice.findByIdAndUpdate(
      id,
      { title, body, category },
      { new: true, runValidators: true }
    );

    if (!notice) {
      return res.status(404).json({ message: "Notice not found" });
    }

    res.status(200).json(notice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNotice = async (req, res) => {
  try {
    const { id } = req.params;

    const notice = await Notice.findByIdAndDelete(id);

    if (!notice) {
      return res.status(404).json({ message: "Notice not found" });
    }

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
