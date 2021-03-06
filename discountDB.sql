PGDMP                         x            postgres    12.3    12.3     
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    13318    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United Kingdom.1252' LC_CTYPE = 'English_United Kingdom.1252';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    2829                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false                       0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    1            �            1259    16398    discount    TABLE     �   CREATE TABLE public.discount (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    discount_code character varying(50) NOT NULL,
    price character varying(50) NOT NULL,
    user_id character varying(50) NOT NULL
);
    DROP TABLE public.discount;
       public         heap    postgres    false            �            1259    16396    discount_id_seq    SEQUENCE     �   CREATE SEQUENCE public.discount_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.discount_id_seq;
       public          postgres    false    205                       0    0    discount_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.discount_id_seq OWNED BY public.discount.id;
          public          postgres    false    204            �            1259    16393 
   postgresDB    TABLE     H   CREATE TABLE public."postgresDB" (
    user_id character varying(50)
);
     DROP TABLE public."postgresDB";
       public         heap    postgres    false            �
           2604    16401    discount id    DEFAULT     j   ALTER TABLE ONLY public.discount ALTER COLUMN id SET DEFAULT nextval('public.discount_id_seq'::regclass);
 :   ALTER TABLE public.discount ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205                      0    16398    discount 
   TABLE DATA           K   COPY public.discount (id, name, discount_code, price, user_id) FROM stdin;
    public          postgres    false    205   D                 0    16393 
   postgresDB 
   TABLE DATA           /   COPY public."postgresDB" (user_id) FROM stdin;
    public          postgres    false    203   �                  0    0    discount_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.discount_id_seq', 15, true);
          public          postgres    false    204            �
           2606    16403    discount discount_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.discount
    ADD CONSTRAINT discount_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.discount DROP CONSTRAINT discount_pkey;
       public            postgres    false    205               �   x�]��!E뙯��4�~�&�k��!�(��u�!����$�-G���n�����[��#Зh���K������Ǚ*\���-�,Y$��>���NY�r������Ƚs�2���_|�}(BW�a��qM��@ץ�?�t8/            x������ � �     