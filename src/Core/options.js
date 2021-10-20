
const options = [
    {
      name: 'text',
      active: true,
    },
    {
      name: 'audio',
      active: true,
    }
]

export function getOptionValue(options, name){
  return options.find(o=>o.name===name).active;
}

export default options;
