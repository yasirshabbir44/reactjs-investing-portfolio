

export const newsData = [
    'Apple announces record-breaking quarterly revenue',
    'Tesla surpasses market expectations with Q3 earnings',
    'Nvidia introduces groundbreaking graphics card at CES 2023',
    'Microsoft unveils new features in upcoming Windows 11 update',
    'Amazon to launch next-gen Echo devices with AI capabilities',
    // Add more news items as needed
];
export const stockData = [
    {
        title: "Apple Inc (AAPL)",
        avatarSrc: "https://companiesmarketcap.com/img/company-logos/64/AAPL.webp",
        symbol: "AAPL",
        exchange: "NASDAQ: AAPL",
        currency: "Currency in USD",
        livePrice: "$195.01",
        stockExchange: "NASDAQ",
        peRatio: 30.5,
        volume: "12M",
        sharesOutstanding: "17.3 billion",
        disclaimer: "This is just a sample. Stock data may not be accurate.",
        stockDetails: {
            title: "Day's Range & 52-week Range",
            subTitle: "Stock Details",
            daysRange: "$192.26 - $195.10",
            weeksRange: "$137.90 - $199.62",
            previousClose: "$191.55",
            open: "$192.26",
            minValue: 10,
            maxValue: 250,
            volume: "20M",
            forwardPE: 28.8,
            earningsPerShare: 6.40,
            dividendYield: 1.2,
        },
        profileData: {
            main: "Apple Inc. designs, manufactures, and markets consumer electronics, computer software, and personal computers. The company's most well-known products include the iPhone smartphones, iPad tablets, and Mac computers.",
            industry: 'Technology',
            sector: 'Information Technology',
            employees: '147,000', // Add actual number of employees
            headquarters: 'Cupertino, California, United States',
            founded: 'April 1, 1976', // Add actual founding date
            marketCap: '2.5T', // Add actual market cap
            website: 'https://www.apple.com/', // Add actual website URL
        }
    },
    {
        title: "Microsoft Corporation (MSFT)",
        avatarSrc: "https://companiesmarketcap.com/img/company-logos/64/MSFT.webp",
        symbol: "MSFT",
        "exchange": "NASDAQ: MSFT",
        "currency": "Currency in USD",
        "livePrice": "$301.42",
        "stockExchange": "NASDAQ",
        "peRatio": 35.2,
        volume: "15M",
        "sharesOutstanding": "7.5 billion",
        "disclaimer": "This is just a sample. Stock data may not be accurate.",
        "stockDetails": {
            title: "Day's Range & 52-week Range",
            subTitle: "Stock Details",
            daysRange: "$298.10 - $301.85",
            weeksRange: "$230.40 - $305.84",
            previousClose: "$297.80",
            minValue: 50,
            maxValue: 400,
            open: "$299.50",
            volume: "15M",
            forwardPE: 30.4,
            earningsPerShare: 8.05,
            dividendYield: 1.5
        },
        "profileData": {
            "main": "Microsoft Corporation is a multinational technology company that produces, licenses, and sells a wide range of software, consumer electronics, and personal computing services.",
            "industry": "Technology",
            "sector": "Information Technology",
            "employees": "181,000",
            "headquarters": "Redmond, Washington, United States",
            "founded": "April 4, 1975",
            "marketCap": "2.2T",
            "website": "https://www.microsoft.com/"
        }
    },
    {
        title: "Tesla, Inc. (TSLA)",
        avatarSrc: "https://companiesmarketcap.com/img/company-logos/64/TSLA.png",
        symbol: "TSLA",
        exchange: "NASDAQ: TSLA",
        currency: "Currency in USD",
        livePrice: "$750.23",
        stockExchange: "NASDAQ",
        peRatio: 120.2,
        volume: "10M",
        sharesOutstanding: "775 million",
        disclaimer: "This is just a sample. Stock data may not be accurate.",
        stockDetails: {
            title: "Day's Range & 52-week Range",
            subTitle: "Stock Details",
            daysRange: "$740.20 - $755.80",
            weeksRange: "$400.00 - $890.00",
            previousClose: "$742.50",
            minValue: 10,
            maxValue: 500,
            open: "$743.20",
            volume: "10M",
            forwardPE: 95.5,
            earningsPerShare: 3.80,
            dividendYield: 0.6,
        },
        profileData: {
            main: "Tesla, Inc. is an American electric vehicle and clean energy company. Tesla's mission is to accelerate the world's transition to sustainable energy.",
            industry: 'Automotive',
            sector: 'Consumer Cyclical',
            employees: '48,016',
            headquarters: 'Palo Alto, California, United States',
            founded: 'July 1, 2003',
            marketCap: '785B',
            website: 'https://www.tesla.com/',
        }
    },
    {
        title: "NVIDIA Corporation (NVDA)",
        avatarSrc: "https://companiesmarketcap.com/img/company-logos/64/NVDA.png",
        symbol: "NVDA",
        exchange: "NASDAQ: NVDA",
        currency: "Currency in USD",
        livePrice: "$320.75",
        stockExchange: "NASDAQ",
        volume: "8M",
        peRatio: 60.2,
        sharesOutstanding: "600 million",
        disclaimer: "This is just a sample. Stock data may not be accurate.",
        stockDetails: {
            title: "Day's Range & 52-week Range",
            subTitle: "Stock Details",
            daysRange: "$315.20 - $325.50",
            weeksRange: "$240.00 - $350.75",
            previousClose: "$315.80",
            minValue: 20,
            maxValue: 600,
            open: "$318.20",
            volume: "8M",
            forwardPE: 45.5,
            earningsPerShare: 4.80,
            dividendYield: 0.9,
        },
        profileData: {
            main: "NVIDIA Corporation is a multinational technology company incorporated in Delaware and based in Santa Clara, California. The company's main areas of business include graphics processing units (GPUs) for gaming and professional markets.",
            industry: 'Semiconductors',
            sector: 'Information Technology',
            employees: '18,975',
            headquarters: 'Santa Clara, California, United States',
            founded: 'April 5, 1993',
            marketCap: '700B',
            website: 'https://www.nvidia.com/',
        }
    },
    {
        title: "Meta Platforms, Inc. (FB)",
        avatarSrc: "https://companiesmarketcap.com/img/company-logos/64/FB.png",
        symbol: "FB",
        exchange: "NASDAQ: FB",
        currency: "Currency in USD",
        livePrice: "$325.60",
        stockExchange: "NASDAQ",
        volume: "12M",
        peRatio: 26.8,
        sharesOutstanding: "2.8 billion",
        disclaimer: "This is just a sample. Stock data may not be accurate.",
        stockDetails: {
            title: "Day's Range & 52-week Range",
            subTitle: "Stock Details",
            daysRange: "$320.20 - $330.40",
            weeksRange: "$250.00 - $360.75",
            previousClose: "$321.80",
            open: "$322.50",
            volume: "12M",
            minValue: 30,
            maxValue: 600,
            forwardPE: 23.5,
            earningsPerShare: 9.60,
            dividendYield: 0.8,
        },
        profileData: {
            main: "Meta Platforms, Inc. is a multinational technology conglomerate. It was founded by Mark Zuckerberg and other Harvard College students and is known for its social media platform Facebook.",
            industry: 'Technology',
            sector: 'Communication Services',
            employees: '74,059',
            headquarters: 'Menlo Park, California, United States',
            founded: 'February 4, 2004',
            marketCap: '925B',
            website: 'https://about.fb.com/',
        }
    }
]
// Add more details as needed


export const companyList = [
    {
        id: 1,
        companyName: 'Apple Inc',
        stockPrice: 195.01,
        changePercentage: 1.8,
        logo: 'https://companiesmarketcap.com/img/company-logos/64/AAPL.webp', // Replace with actual logo URL
    },
    {
        id: 2,
        companyName: 'Microsoft Corporation',
        stockPrice: 300.45,
        changePercentage: -0.5,
        logo: 'https://companiesmarketcap.com/img/company-logos/64/MSFT.webp', // Replace with actual logo URL
    },
    {
        id: 3,
        companyName: 'Tesla Inc',
        stockPrice: 850.22,
        changePercentage: 2.5,
        logo: 'https://companiesmarketcap.com/img/company-logos/64/TSLA.webp', // Replace with actual logo URL
    },
    {
        id: 4,
        companyName: 'Nvidia Corporation',
        stockPrice: 400.75,
        changePercentage: 1.2,
        logo: 'https://companiesmarketcap.com/img/company-logos/64/NVDA.webp', // Replace with actual logo URL
    },
    {
        id: 5,
        companyName: 'Meta Platforms (Facebook)',
        stockPrice: 381.78,
        changePercentage: 3.2,
        logo: 'https://companiesmarketcap.com/img/company-logos/256/META.webp', // Replace with actual logo URL
    },
    // Add more companies as needed
];