export function format(fmt, ...args) {
    if (!fmt.match(/^(?:(?:(?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{[0-9]+\}))+$/)) {
        throw new Error('invalid format string.')
    }
    return fmt.replace(
        /((?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{([0-9]+)\})/g,
        (m, str, index) => {
            if (str) {
                return str.replace(/(?:{{)|(?:}})/g, (m) => m[0])
            } else {
                if (index >= args.length) {
                    throw new Error('argument index is out of range in format')
                }
                return args[index]
            }
        }
    )
}
