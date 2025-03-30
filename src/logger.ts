import * as logger from "node-color-log";

const shotiLogger = logger.createNamedLogger("ShotiAPI");
shotiLogger.setDate(() => new Date().toLocaleTimeString());

export default shotiLogger;
