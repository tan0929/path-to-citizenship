

export function getPrecacheFiles(){
  let result = [];
  //manifest.json
  result.push({url: 'manifest.json', revision: null})
  //audio
  for(let i =1; i<=100; i++){
    result.push({url: `/audio/questions/${i}.mp3`, revision: null});
  }
  //icons
  result.push({url: 'balloons16.png', revision: null})
  result.push({url: 'balloons24.png', revision: null})
  result.push({url: 'balloons32.png', revision: null})
  result.push({url: 'balloons64.png', revision: null})
  result.push({url: 'balloons128.png', revision: null})
  result.push({url: 'balloons256.png', revision: null})
  result.push({url: 'balloons512.png', revision: null})
}

export default function injectPrecacheFiles(precacheList){

  return precacheList.concat(getPrecacheFiles());
}

