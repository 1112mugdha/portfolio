import pathlib

p1 = pathlib.Path(r'C:\Users\DELL\.gemini\antigravity\scratch\mugdha-portfolio\public\images\cursor-arrow-pink.svg')
p2 = pathlib.Path(r'C:\Users\DELL\.gemini\antigravity\scratch\mugdha-portfolio\public\images\cursor-pointer-lime.svg')

a_content = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path d="M2,2 L2,24 L7.5,18.5 L12.5,26.5 L15.5,24.5 L10.5,16.5 L18,16.5 Z" fill="#E96F98" stroke="#171515" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/></svg>'

b_content = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path d="M7,2 C5.8,2 5,2.8 5,4 L5,13.5 C4.4,13.1 3.5,13 2.7,13.4 C1.6,14 1.2,15.2 1.6,16.3 C3.2,20.8 6.5,26 11,26 C16,26 19,22 19,17 L19,10 C19,8.8 18.2,8 17,8 C16.6,8 16.2,8.1 15.9,8.3 C15.5,7.5 14.7,7 13.8,7 C13.3,7 12.8,7.2 12.4,7.5 C12,6.6 11.1,6 10,6 C9.7,6 9.3,6.1 9,6.2 L9,4 C9,2.8 8.2,2 7,2 Z" fill="#D7F23A" stroke="#171515" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/></svg>'

p1.write_text(a_content, encoding='utf-8')
p2.write_text(b_content, encoding='utf-8')
print('Successfully saved cursor SVGs!')
