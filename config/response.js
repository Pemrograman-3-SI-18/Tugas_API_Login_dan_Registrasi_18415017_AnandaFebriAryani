module.exports = {

    commonError:{
        error: true,
        msg : "Terjadi Kesalahan Pada Server"
    },
    commonErrorMsg: (msg) => {
        return {
            error: true,
            msg : msg
        }
    },
    commonsuccess:{
        error: false,
        msg : "Berhasil Memuat Permintaan"
    },
    commonSuccessMsg: (msg) => {
        return {
            error: false,
            msg: msg
        }
    },
    commonResult: (data) => {
        return{
            error: false,
            msg : "Berhasil Memuat Data",
            data : data
        }
    }

}