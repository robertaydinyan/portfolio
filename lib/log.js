const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

let ENV = process.env.NODE_ENV;

// can be much more flexible than that O_o
function getLogger(module) {

    let path = module.filename.split('/').slice(-2).join('/');

    const myFormat = printf(info => {
        return `[${info.label}] ${info.level}: ${info.message}`;
    });

    return createLogger({
        format: combine(
            label({ label: 'console' }),
            myFormat
        ), transports: [
            new transports.Console({
                colorize: true,
                level: (ENV === 'development') ? 'debug' : 'error',
                label: path
            })
        ]
    });
}

module.exports = getLogger;