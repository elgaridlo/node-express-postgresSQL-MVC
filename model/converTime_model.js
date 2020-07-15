let convertTime = function(request, response) {
    let time = request.params.id
    let checkAPM = time.slice(-2);
    let hour = time.split(':')[0];
    let minute = time.split(':')[1];
    let second = time.split(':')[2];

    console.log('checkAPM = ', checkAPM);
    second = second.slice(0,2);
    console.log('second = ', second)
    let waktu = '';
   if (time) {
        if (checkAPM === 'AM' ) {
            waktu = hour + ':' + minute + ':' + second
        } else if (checkAPM === 'PM') {
            console.log('Masuk PM')
            if ( hour === '00' ) {
                waktu = '12' + ':' + minute + ':' + second
            } else {

                waktu = `${Number(hour)+ 12}` + ':' + minute + ':' + second
                console.log('isi = ', Number(hour)+ 12)
            }
        }
        console.log('time === ',waktu)
   }
   response.status(200).send({time: waktu})
}

module.exports = {
    convertTime
}