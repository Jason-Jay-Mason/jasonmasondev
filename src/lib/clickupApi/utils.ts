function createQueryParams(params: Record<string, any>): URLSearchParams {
  let queryParams: Record<string, string> = {}
  for (const key in params) {
    queryParams[key] = String(params[key])
  }
  return new URLSearchParams(queryParams)
}



function getValueByAddress(address: string, obj: Record<string, any>): string[] {
  const keys = address.split('.')

  if (keys.length === 1) {
    return [keys[0], obj[keys[0]]]
  }

  const [currentKey, ...remainingKeys] = keys

  if (obj.hasOwnProperty(currentKey)) {
    return getValueByAddress(remainingKeys.join('.'), obj[currentKey])
  }

  throw new Error(`The address ${address} was not found on the data returned from clickup. Please make sure ${address} is a valid address that one would expect to receive from the clickup server`)
}

export default {
  getValueByAddress,
  createQueryParams
}
