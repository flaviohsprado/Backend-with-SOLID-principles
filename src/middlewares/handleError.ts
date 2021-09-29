import { Response } from "express";

interface ErrorProps {
  statusCode: number;
  message: string;
  validationError: any;
  code: string;
  meta: { target: string[] };
}

const handleError = (error: ErrorProps, res: Response) => {
  const { statusCode, message } = error;
  // if (error.code) return prismaErrorHandler(error, res);
  res.status(statusCode || 500).json({
    message: message || "Unexpected error",
    statusCode: statusCode || 500,
    status: "error",
  });
};

export default handleError;
