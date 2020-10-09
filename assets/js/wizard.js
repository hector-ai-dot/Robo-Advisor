var Strategy = [{
        name: 'Low Volatility',
        factor: [{
                name: "inputMIS-EXP_PCT",
                value: [1, 2, 3]
            },
            {
                name: "inputRENT_PCT",
                value: [1, 2, 3]
            },
            {
                name: "inputMoney",
                value: [3, 4]
            },
            {
                name: "inputMDD",
                value: [1, 2]
            },
            {
                name: "inputReturn",
                value: [1, 2, 3]
            },
        ]
    },
    {
        name: 'Growth',
        factor: [{
                name: "inputBouns_PCT",
                value: [1, 2, 3]
            },
            {
                name: "inputMDD",
                value: [3, 4]
            },
            {
                name: "inputReturn",
                value: [3, 4]
            },
            {
                name: "inputDVD",
                value: [1, 2]
            },
        ]
    },
    {
        name: 'Dividend',
        factor: [{
                name: "inputMoney",
                value: [3, 4]
            },
            {
                name: "inputDVD",
                value: [3, 4]
            },
        ]
    },
]

// 檢查是否所有必填欄位都有填到
var checkAllField = () => {
    let isOK = true
    let checkList = ['#inputBouns_PCT', '#inputMIS-EXP_PCT', '#inputRENT_PCT', '#inputMoney', '#inputMDD', '#inputReturn', '#inputDVD']
    checkList.forEach(selector => {
        if ($(selector).val() == 0) {
            $(selector).parent().addClass('alert').addClass('alert-danger')
            isOK = false
        } else {
            $(selector).parent().removeClass('alert-danger').removeClass('alert')
        }
    });

}


// 當HTML的文件全載入到記憶體時執行
$(() => {
    $('#send').on('click', () => {

        // 檢查是否所有必填欄位都有填到
        checkAllField()

        // 判斷是否必要資料是否全填
        if (isOK) {
            // 資料已經全填
            $('#DataNotComplete').hide()

        } else {
            $('#DataNotComplete').show()
        }
    })

})