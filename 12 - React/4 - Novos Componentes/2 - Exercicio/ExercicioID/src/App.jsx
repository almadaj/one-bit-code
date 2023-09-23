import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://scontent.ffor11-2.fna.fbcdn.net/v/t1.6435-9/43354625_1871068076334113_2900745951654182912_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFnoEDG2duaysa0bnA3lS0xTKIJ58yXGiNMognnzJcaIxh_aI8_RFOPBKa03xMDNryDMNfIOyfW0denzoqETwl1&_nc_ohc=z3VW3DtXFTsAX-JNBJH&_nc_ht=scontent.ffor11-2.fna&oh=00_AfCfqM2O_12uKqzh7ga9A_jG8mmYk2CuZVrP74ESHCeXig&oe=6535C036"
        name="Juliano Almada"
        bio="Full-stack Student"
        email="julianoalmada48@gmail.com"
        phone="+55 85 9 98549193"
        githubUrl="https://github.com/almadaj"
        linkedinUrl="https://linkedin.com/in/juliano-almada"
        twitterUrl="https://twitter.com/juliano_almada"
      />
    </div>
  );
}
