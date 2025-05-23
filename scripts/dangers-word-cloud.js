function show(text, heading) {
  var textElement = document.getElementById("explanation-text");
  if (textElement.className) {
    textElement.className = 'no-mbp';
  }
  textElement.className = 'fadeOut no-mbp';
  textElement.innerHTML = text;
  textElement.focus();
  textElement.className = 'fadeIn no-mbp';

  var headingElement = document.getElementById("explanation-heading");
  if (headingElement.className) {
    headingElement.className = 'no-mbp';
  }
  headingElement.className = 'fadeOut no-mbp';
  headingElement.innerHTML = heading;
  headingElement.focus();
  headingElement.className = 'fadeIn no-mbp';
}

let h1 = "Selbstvertrauen<br>‎"
let h2 = "Nein-Sagen<br>‎"
let h3 = "Gefühle wahrnehmen<br>‎"
let h4 = "Wertehaltung<br>‎"
let h5 = "&#40;Eigen-&#41; Verantwortung<br>‎"
let h6 = "Umgang mit Konflikten<br>‎"
let h7 = "Vielseitige Interessen<br>‎"

let t1 = "Kennt seine eigenen Stärken und Schwächen, achtet sich selbst und ist sich selbst wertvoll (Selbstwertgefühl). Vertraut auf sich und seine Fähigkeiten. Weiß, was ihm gut tut und was nicht."
let t2 = "Muss nicht alles sofort haben wollen. Kann auch mal verzichten und sich einschränken ohne, dass sein Selbstwertgefühl darunter leidet. Besitzt die Fähigkeit, auch in Situationen mit Gruppendruck „Nein” zu sagen."
let t3 = "Kann eigene Gefühle wahrnehmen und ausdrücken. Kann sich mit den eigenen Gefühlen und Gefühlen anderer Menschen auseinandersetzen."
let t4 = "Hält gesellschaftliche Werte wie Toleranz, Achtung anderer Menschen, Freiheit, Zuverlässigkeit und Hilfsbereitschaft, Wahrheit, Sicherheit und Nachhaltigkeit für wichtig und bedeutsam. Achtet die eigenen Grenzen und der Grenzen anderer Menschen."
let t5 = "Übernimmt Verantwortung für sich und für andere. Handelt verantwortlich gegen über sich und anderen. Sucht die Schuld nicht immer bei anderen"
let t6 = "Weicht personlichen, familiaren oder schulischen Konflikten, Belastungen, Enttäuschungen und Problemsituationen nicht dauernd aus, sonder setzt sich mit ihnen auseinander und kann sich daruber mitteilen"
let t7 = "Hat vielseitige Interessen, die auch in einer sinnvollen, Freude machenden Freizeitgestaltung zum Ausdruck kommen, zum Beispiel im Sportverein oder in der Natur."

document.getElementById("w1").addEventListener("click", function(){show(t1, h1)});
document.getElementById("w2").addEventListener("click", function(){show(t2, h2)});
document.getElementById("w3").addEventListener("click", function(){show(t3, h3)});
document.getElementById("w4").addEventListener("click", function(){show(t4, h4)});
document.getElementById("w5").addEventListener("click", function(){show(t5, h5)});
document.getElementById("w6").addEventListener("click", function(){show(t6, h6)});
document.getElementById("w7").addEventListener("click", function(){show(t7, h7)});