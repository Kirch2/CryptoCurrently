# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# # # # # 
# Seed Cryptocurrency Data

btc = Cryptocurrency.create({
    label: "Bitcoin",
    description: "#1 crypto",
    marketCap: 966492,
    price: 51510.55,
    symbol: "BTC",
    logoUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=014",
    change_24h: 2241.5,
    change_7d: 9264.5,
})

eth = Cryptocurrency.create({
    label: "Ethereum",
    description: "#2 crypto",
    marketCap: 413941,
    price: 3524.56,
    symbol: "ETH",
    logoUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=014",
    change_24h: 133.26,
    change_7d: 521.05,
})

bnb = Cryptocurrency.create({
    label: "Binance Coin",
    description: "#3 crypto",
    marketCap: 74368,
    price: 441.91,
    symbol: "BNB",
    logoUrl: "https://www.logo.wine/a/logo/Binance/Binance-Icon-Logo.wine.svg",
    change_24h: 16.06,
    change_7d: 46.50,
})

ada = Cryptocurrency.create({
    label: "Cardano",
    description: "#4 crypto",
    marketCap: 6917,
    price: 2.16,
    symbol: "ADA",
    logoUrl: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    change_24h: -0.04,
    change_7d: 0.11,
})

usdt = Cryptocurrency.create({
    label: "Tether",
    description: "#5 crypto",
    marketCap: 6806,
    price: 1.01,
    symbol: "USDT",
    logoUrl: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=002",
    change_24h: 0.17,
    change_7d: 0.35,
})

xrp = Cryptocurrency.create({
    label: "XRP",
    description: "#6 crypto",
    marketCap: 4930,
    price: 1.05,
    symbol: "XRP",
    logoUrl: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=002",
    change_24h: -0.11,
    change_7d: 0.15,
})

sol = Cryptocurrency.create({
    label: "Solana",
    description: "#7 crypto",
    marketCap: 4490,
    price: 151.41,
    symbol: "SOL",
    logoUrl: "https://cryptologos.cc/logos/solana-sol-logo.png?v=014",
    change_24h: 10.05,
    change_7d: 29.50,
})

usdc = Cryptocurrency.create({
    label: "USD Coin",
    description: "#8 crypto",
    marketCap: 3235,
    price: 0.9999,
    symbol: "USDC",
    logoUrl: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=002",
    change_24h: -0.01,
    change_7d: 0.002,
})

doge = Cryptocurrency.create({
    label: "Dogecoin",
    description: "#9 crypto",
    marketCap: 3209,
    price: 0.2447,
    symbol: "DOGE",
    logoUrl: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=002",
    change_24h: -0.02,
    change_7d: 0.05,
})

dot = Cryptocurrency.create({
    label: "Polka Dot",
    description: "#10 crypto",
    marketCap: 3068,
    price: 31.24,
    symbol: "DOT",
    logoUrl: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=014",
    change_24h: 4.67,
    change_7d: -1.89,
})

# # # # # 
# Seed User data
user01 = User.create({
    username: "aeksco",
    email: "aeksco@gmail.com"
})

user02 = User.create({
    username: "ckirch",
    email: "ckirch@gmail.com"
})


# # # # # 
# Seed Watchlist data
watchlist01 = Watchlist.create({
    label: "My first watchlist",
    description: "#4 crypto",
    private: true,
    dailyPerformance: 5.5,
    user_id: 1

})

watchlist02 = Watchlist.create({
    label: "My second watchlist",
    description: "#5 crypto",
    private: false,
    dailyPerformance: 2.5,
    user_id: 2
})

# # # # # 
# Seed WatchlistEntry Data
WatchlistEntry.create({
    watchlist_id: 1,
    cryptocurrency_id: 1
})

WatchlistEntry.create({
    watchlist_id: 1,
    cryptocurrency_id: 2
})

WatchlistEntry.create({
    watchlist_id: 2,
    cryptocurrency_id: 1
})
