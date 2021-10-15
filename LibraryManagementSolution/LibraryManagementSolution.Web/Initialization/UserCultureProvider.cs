using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryManagementSolution.AppServices
{
    public class UserCultureProvider : IRequestCultureProvider
    {
        private static Dictionary<string, string> TwoLetterToFourLetter = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
        {
            { "en", "en-US" },
            { "bn", "bn-BN" }
        };

        public Task<ProviderCultureResult> DetermineProviderCultureResult(HttpContext httpContext)
        {
            var culture = httpContext.Request.Cookies["LanguagePreference"];
            if (string.IsNullOrEmpty(culture))
                culture = null;
            else
            {
                if (culture.Length == 2)
                {
                    string code;
                    if (TwoLetterToFourLetter.TryGetValue(culture, out code))
                        culture = code;
                    else
                        culture = culture + "-" + culture.ToUpperInvariant();
                }
            }

            return Task.FromResult(new ProviderCultureResult(culture ?? "en-US", culture ?? "en-US"));
        }

        private static List<CultureInfo> supportedCultures;
        private static readonly string[] supportedCultureIdentifiers = new string[] {
            "en-US",            
            "bn-BN"
        };


        public static IList<CultureInfo> SupportedCultures
        {
            get
            {
                if (supportedCultures == null)
                    supportedCultures = supportedCultureIdentifiers.Select(x =>
                    {
                        try
                        {
                            return new CultureInfo(x);
                        }
                        catch
                        {
                            return null;
                        }
                    }).Where(x => x != null).ToList();

                return supportedCultures;
            }
        }
    }

}