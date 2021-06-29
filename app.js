


const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i +=1) {
        console.log(profileDataArr[i]);
    }

    console.log('==========');

    profileDataArr.forEach(profileItem => console.log(profileItem));
};