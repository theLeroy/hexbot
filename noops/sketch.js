var ip = {},
    nip = "#012362"

ip.f = "#123134"
ip.v = []

function cToDez(q) {
  let s = 1;
  let e = 3;
  for (var i = 0; i < 3; i++) {
    ip.v[i] = parseInt(q.substring(s, e), 16);
    s + 2; e + 2;
  }
  return ip;
}
cToDez(ip.f);

console.log(ip)


ip = nip;
