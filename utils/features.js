import jwt from "jsonwebtoken";

 const secret = "kk"
export const sendCookie = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id },  secret, { expiresIn: "3d" });
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: "none",
      secure:  true
    })
    .json({
      success: true,
      message,
    });
};
