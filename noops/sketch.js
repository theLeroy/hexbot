var ip = {},
    nip = {},
    B = []

ip.f = "#123134"
nip.f = "#FFFF00"

function cToDez(q) {
  let s=1,e=3,o=[];
  for (let i = 0; i < 3; i++) {
    o[i] = parseInt(q.substring(s, e), 16)
    s=s+2;e=e+2
  }
  return o;
}

B = cToDez(ip.f);
nip.v = cToDez(nip.f);

var sint = setInterval(() => {
    for (var i = 0; i < 3; i++) {
      B[i] = (B[i] > nip.v[i]) ? B[i]-1:B[i]+1
    }
    B.toString()
    document.getElementById("b").style.backgroundColor = `rgb(${B})`
}, 10)

ip = nip;
