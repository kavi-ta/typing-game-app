exports.distribution = (intialDistribution, finalDistribution, currentLevel, totalLevels)=>{
    return intialDistribution + (finalDistribution-initialDistribution)* (currentLevel/totalLevels)
}

exports.time = (intialTime, currentLevel)=>{
    return intialTime + 10*(currentLevel/5)
}

exports.wordCount = (intialWordCount, currentLevel)=>{
    return intialWordCount+ currentLevel+ (currentLevel/10)
}