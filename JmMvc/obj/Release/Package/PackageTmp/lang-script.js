var arrLang = new Array();
arrLang['en'] = new Array();
arrLang['pl'] = new Array();

//-------------------------------------------------------------------------------------------------------------------------------

// English content

//Navbar
arrLang['en']['student'] = 'Student';
arrLang['en']['about'] = 'About Us';
arrLang['en']['contact'] ='Contact'

//About
arrLang['en']['aboutUs'] = 'About us';
arrLang['en']['aboutVague'] = 'StudList - the student list management tool ideal for your university.';
arrLang['en']['aboutDetailsFirst'] = 'Founded by a dedicated team of professionals passionate about education and technology, our company provides a powerful and intuitive tool designed specifically for managing student lists. We realized that the ever-evolving educational landscape called for a more efficient, streamlined approach, hence we embarked on the journey to develop a tool that would meet the dynamic needs of educators and administrative staff.';
arrLang['en']['aboutDetailsSecond'] = 'With a strong commitment to delivering a high level of functionality and user-friendliness, we have created a unique software solution that simplifies the task of student list management. Whether you\'re a small tutoring center or a large university, our tool is flexible and scalable to accommodate your specific needs.';
arrLang['en']['aboutDetailsThird'] = 'Our mission is to empower educational institutions with the best technology, saving valuable time and enabling a stronger focus on student success. By bridging the gap between technology and education, we strive to bring about a change that positively impacts learning outcomes and enhances the overall efficiency of educational administration.';
arrLang['en']['aboutDetailsFourth'] = 'Trust us to provide you with a solution that is not just about managing names; it\'s about shaping the future of education.';

//Contact
arrLang['en']['contactUs'] = 'Contact';
arrLang['en']['contactIncentive'] = 'Go ahead and write or call us!';
arrLang['en']['phoneAbb'] = 'P:';
arrLang['en']['support'] = 'Support: ';
arrLang['en']['marketing'] = 'Marketing: ';

//Student
arrLang['en']['students'] = 'Students';
arrLang['en']['add_addStudent'] = 'Add Student';
arrLang['en']['id'] = 'ID';
arrLang['en']['name'] = 'Name and surname';
arrLang['en']['mail'] = 'Email';
arrLang['en']['class'] = 'Class';
arrLang['en']['action'] = 'Action';
arrLang['en']['edit'] = 'Edit';
arrLang['en']['delete'] = 'Delete';
//Student_Add
arrLang['en']['add_firstName'] = 'First Name';
arrLang['en']['add_lastName'] = 'Last Name';
arrLang['en']['add_class'] = 'Class';
//----------------------------------------------------------------------------------------------------------------------------------

// Polish content

//Navbar
arrLang['pl']['student'] = 'Student';
arrLang['pl']['about'] = 'O nas';
arrLang['pl']['contact'] = 'Kontakt'

//About
arrLang['pl']['aboutUs'] = 'O nas';
arrLang['pl']['aboutVague'] = 'StudList- narzędzie do zarządzania listami studentów idealne dla twojej uczelni.';
arrLang['pl']['aboutDetailsFirst'] = 'Założona przez oddany zespół profesjonalistów pasjonujących się edukacją i technologią, nasza firma zapewnia potężne i intuicyjne narzędzie zaprojektowane specjalnie do zarządzania listami uczniów. Zdaliśmy sobie sprawę, że stale ewoluujący krajobraz edukacyjny wymaga bardziej wydajnego, usprawnionego podejścia, dlatego rozpoczęliśmy podróż w celu opracowania narzędzia, które zaspokoi dynamiczne potrzeby nauczycieli i personelu administracyjnego.';
arrLang['pl']['aboutDetailsSecond'] = 'Dzięki silnemu zaangażowaniu w dostarczanie wysokiego poziomu funkcjonalności i łatwości obsługi, stworzyliśmy unikalne oprogramowanie, które upraszcza zadanie zarządzania listą uczniów. Niezależnie od tego, czy jesteś małym centrum korepetycji, czy dużym uniwersytetem, nasze narzędzie jest elastyczne i skalowalne, aby dostosować się do Twoich konkretnych potrzeb.';
arrLang['pl']['aboutDetailsThird'] = 'Naszą misją jest zapewnienie instytucjom edukacyjnym najlepszej technologii, oszczędzając cenny czas i umożliwiając większe skupienie się na sukcesie studentów. Wypełniając lukę między technologią a edukacją, staramy się wprowadzać zmiany, które pozytywnie wpływają na wyniki nauczania i zwiększają ogólną wydajność administracji edukacyjnej.';
arrLang['pl']['aboutDetailsFourth'] = 'Zaufaj nam, że dostarczymy Ci rozwiązanie, które nie polega tylko na zarządzaniu nazwiskami; chodzi o kształtowanie przyszłości edukacji.';

//Contact
arrLang['pl']['contactUs'] = 'Kontakt';
arrLang['pl']['contactIncentive'] = 'Śmiało pisz lub dzwoń!';
arrLang['pl']['phoneAbb'] = 'tel: ';
arrLang['pl']['support'] = 'Wsparcie techniczne: ';
arrLang['pl']['marketing'] = 'Marketing: ';

//Student
arrLang['pl']['students'] = 'Studenci';
arrLang['pl']['add_addStudent'] = 'Dodaj studenta';
arrLang['pl']['id'] = 'ID';
arrLang['pl']['name'] = 'Imię i nazwisko';
arrLang['pl']['mail'] = 'Email';
arrLang['pl']['class'] = 'Klasa';
arrLang['pl']['action'] = 'Akcja';
arrLang['pl']['edit'] = 'Edytuj';
arrLang['pl']['delete'] = 'Usuń';
//Student_Add
arrLang['pl']['add_firstName'] = 'Imię';
arrLang['pl']['add_lastName'] = 'Nazwisko';
arrLang['pl']['add_class'] = 'Klasa';

//------------------------------------------------------------------------------------------------------------------------------------------

function translateLang(lang) {
    $('.lang').each(function (index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
    });
}

$(function () {
    //first check for stored language in localStorage i.e. fetch data from localStorage
    let stored_lang = localStorage.getItem("stored_lang");
    //if any then translate page accordingly
    if (stored_lang != null && stored_lang != undefined) {
        lang = stored_lang;
        translateLang(lang);
    }


    $('.translate').click(function () {
        var lang = $(this).attr('id');
        //on click store language to localStorage
        localStorage.setItem("stored_lang", lang);
        translateLang(lang);
    });

});