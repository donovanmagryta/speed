 < h t m l > 
 
 < s c r i p t > 
 f u n c t i o n   i n i t G e o ( )   { 
         n a v i g a t o r . g e o l o c a t i o n . w a t c h P o s i t i o n ( 
                 g e o s u c c e s s , 
                 g e o f a i l u r e , 
                 { 
                         e n a b l e H i g h A c c u r a c y : t r u e , 
                         m a x i m u m A g e : 3 0 0 0 0 , 
                         t i m e o u t : 2 0 0 0 0 
                 } 
         ) ; 
 
         / / m o v e S p e e d ( 3 0 ) ; 
         / / m o v e C o m p a s s N e e d l e ( 5 6 ) ; 
 } 
 
 v a r   c o u n t   =   0 ; 
 f u n c t i o n   g e o s u c c e s s ( e v e n t )   { 
 
         $ ( " # d e b u g o u t p u t " ) . t e x t ( " g e o s u c c e s s :   "   +   c o u n t + +   +   "   :   "   +   e v e n t . c o o r d s . h e a d i n g   +   " : "   +   e v e n t . c o o r d s . s p e e d ) ; 
 
         v a r   h e a d i n g   =   e v e n t . c o o r d s . h e a d i n g ; 
         v a r   s p e e d   =   e v e n t . c o o r d s . s p e e d ; 
 
         i f   ( h e a d i n g   ! =   n u l l   & &   s p e e d   ! = n u l l   & &   s p e e d   >   0 )   { 
               m o v e C o m p a s s N e e d l e ( h e a d i n g ) ; 
         } 
 
         i f   ( s p e e d   ! =   n u l l )   { 
                 / /   u p d a t e   t h e   s p e e d 
                 / / m o v e S p e e d ( s p e e d ) ; 
 $ ( " # t o p t i t l e " ) . t e x t ( 
 s p e e d ) ; 
 
         } 
 } 
 
 < / s c r i p t > 
         < h 1   i d = " t o p t i t l e " > s p e e d < / h 1 > 
 < / h t m l > 
 
